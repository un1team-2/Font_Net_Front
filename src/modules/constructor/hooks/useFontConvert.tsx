import { FontController } from "@/common/api";
import {
	ConvertTaskContent,
	FontContent,
} from "@/common/api/controllers/font/types";
import { Result } from "@/common/api/types";
import axios from "axios";
import { useEffect, useState } from "react";

const useFontConvert = (sourceFile: File | Blob) => {
	const [data, setData] = useState<Result<FontContent>>();
	const [error, setError] = useState<string>();
	const [loaded, setLoaded] = useState(false);

	useEffect(() => {
		const checkConvert = async (taskId?: number) => {
			if (loaded) return;
			try {
				const response =
					taskId !== undefined
						? await FontController.getTaskById(taskId)
						: await FontController.convert(sourceFile);
				if (response.status === 200) {
					setData(response.data as Result<FontContent>);
					setLoaded(true);
				} else {
					const content = response.data.content as ConvertTaskContent;
					setTimeout(
						() => checkConvert(content.waitingTaskId),
						content.sendNextInSeconds * 1000
					);
				}
			} catch (err) {
				setLoaded(true);
				if (axios.isAxiosError(err)) setError(err.message);
				else throw err;
			}
		};

		checkConvert();
	}, []);

	return { data, error, loaded };
};

export default useFontConvert;
