import { Result } from "../../types";

export type FontContent = {
	id: number;
	name: string;
	extension: string;
	algorithmVersion: string;
};

export type FontResponse = Result<FontContent>;
export type FontsResponse = Result<FontContent[]>;

export type ConvertTaskContent = {
	completed: boolean;
	waitingTaskId?: number;
	sendNextInSeconds: number;
	totalQueueCount: number;
	workersCount: number;
	averageProcessingTimeSeconds: number;
	isFailed: boolean;
	errorMessage?: string;
};

export type ConvertTaskResponse = Result<ConvertTaskContent>;
export type ConvertResponse = Result<ConvertTaskContent | FontContent>;
