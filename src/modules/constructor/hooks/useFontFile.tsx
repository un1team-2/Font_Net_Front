import { FontController } from "@/common/api";
import axios from "axios";
import { useEffect, useState } from "react";

const useFontFile = (fontId: number) => {
	const [file, setFile] = useState<Blob>();
	const [error, setError] = useState<string>();
	const [loaded, setLoaded] = useState(false);

	useEffect(() => {
		(async () => {
			try {
				const response = await FontController.download(fontId);
				setFile(response.data);
			} catch (err) {
				if (axios.isAxiosError(err)) setError(err.message);
				else throw err;
			} finally {
				setLoaded(true);
			}
		})();
	}, []);

	return { file, error, loaded };
};

export default useFontFile;
