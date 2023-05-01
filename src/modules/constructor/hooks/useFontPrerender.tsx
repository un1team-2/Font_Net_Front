import { FontController } from "@/common/api";
import axios from "axios";
import { useEffect, useState } from "react";

const useFontPrerender = (fontId: number, text?: string) => {
	const [prerender, setPrerender] = useState<Blob>();
	const [error, setError] = useState<string>();
	const [loaded, setLoaded] = useState(false);

	useEffect(() => {
        setLoaded(false);
        setError(undefined);
		(async () => {
			try {
				const response = await FontController.prerender(fontId, text);
				setPrerender(response.data);
			} catch (err) {
				if (axios.isAxiosError(err)) setError(err.message);
				else throw err;
			} finally {
				setLoaded(true);
			}
		})();
	}, [fontId, text]);

	return { prerender, error, loaded };
};

export default useFontPrerender;
