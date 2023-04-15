import axios from "axios";
import { useEffect, useState } from "react";
import { apiClient } from "../api/axiosClients";

const useApi = (url: string, method: string, payload: any) => {
	const [data, setData] = useState();
	const [error, setError] = useState("");
	const [loaded, setLoaded] = useState(false);

	useEffect(() => {
		(async () => {
			try {
				const response = await apiClient.request({
					url,
					method,
					data: payload,
				});
				setData(response.data);
			} catch (err) {
				if (axios.isAxiosError(err)) setError(err.message);
				else throw err;
			} finally {
				setLoaded(true);
			}
		})();
	}, []);

	return { data, error, loaded };
};

export default useApi;
