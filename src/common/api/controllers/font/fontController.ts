import { apiClient } from "../../axiosClients";
import { Result } from "../../types";
import { ConvertResponse, FontResponse, FontsResponse } from "./types";

const getAll = async (cancel = false) => {
	const response = await apiClient.get<FontsResponse>("font");
	return response;
};

const getById = async (id: number, cancel = false) => {
	const response = await apiClient.get<FontResponse>(`font/${id}`);
	return response;
};

const convert = async (file: File | Blob, cancel = false) => {
	const formData = new FormData();
	formData.append("file", file);
	const response = await apiClient.post<ConvertResponse>(
		"convert",
		formData,
		{
			headers: {
				"Content-Type": "multipart/form-data",
			},
		}
	);
	return response;
};

const download = async (id: number, cancel = false) => {
	const response = await apiClient.get<Blob>(`font/${id}/download`, {
		responseType: "blob",
	});
	return response;
};

const prerender = async (
	id: number,
	text?: string,
	width?: number,
	height?: number,
	cancel = false
) => {
	const response = await apiClient.get<Blob>(`font/${id}/prerender`, {
		params: {
			text,
			width,
			height,
		},
		responseType: "blob",
	});

	return response;
};

const getTaskById = async (id: number, cancel = false) => {
	const response = await apiClient.get<ConvertResponse>(`font/wait/${id}`);
	return response;
};

const fontController = {
	getById,
	getAll,
	getTaskById,
	convert,
	download,
	prerender,
};

export default fontController;
