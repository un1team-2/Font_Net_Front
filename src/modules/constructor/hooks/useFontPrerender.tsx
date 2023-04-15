import { FontController } from "@/common/api";
import axios from "axios";
import { useEffect, useState } from "react";

const useFontPrerender = (fontId: number) => {
	const [prerender, setPrerender] = useState<Blob>();
	const [error, setError] = useState<string>();
	const [loaded, setLoaded] = useState(false);

	useEffect(() => {
		(async () => {
			try {
				const response = await FontController.prerender(fontId);
				setPrerender(response.data);
			} catch (err) {
				if (axios.isAxiosError(err)) setError(err.message);
				else throw err;
			} finally {
				setLoaded(true);
			}
		})();
	}, []);

	return { prerender, error, loaded };
};

export default useFontPrerender;
