export type Result<T> = {
	content?: T;
	error?: Error;
	isSuccess: boolean;
	responseTime: Date;
};

export type Error = {
	code: number;
	type: string;
	message: string;
};
