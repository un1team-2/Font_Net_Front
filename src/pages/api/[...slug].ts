import axios, { AxiosResponse } from "axios";
import { IncomingHttpHeaders } from "http";
import { NextApiRequest, NextApiResponse } from "next";

const bffApiClient = axios.create({
	baseURL: "http://localhost:5096/api/v1",
});

export const config = {
	api: {
		bodyParser: false,
	},
};

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	const slug =
		typeof req.query.slug === "string"
			? req.query.slug
			: req.query.slug!.join("/");

	const headers: IncomingHttpHeaders = {
		...req.headers,
		"content-type": req.headers["content-type"],
		"content-length": req.headers["content-length"],
	};

	const { success, answer, err } = await request(req, headers, slug);
	if (success && answer !== undefined) {
		res.writeHead(answer.status, answer.statusText, answer.headers as any);
		return res.end(answer.data);
	} else {
		if (axios.isAxiosError(err) && err.response !== undefined)
			return res.status(err.response.status).send(err.response.data);
		return res.status(500).end();
	}
}

const request = async (
	req: NextApiRequest,
	headers: IncomingHttpHeaders,
	slug: string
): Promise<{
	success: boolean;
	answer?: AxiosResponse<any, any>;
	err?: unknown;
}> => {
	const { slug: _, ...params } = req.query;
	try {
		const answer = await bffApiClient.request({
			method: req.method,
			data: req,
			params: params,
			headers,
			url: slug,
			responseType: "arraybuffer",
		});
		return {
			success: true,
			answer,
		};
	} catch (err) {
		return {
			success: false,
			err,
		};
	}
};
