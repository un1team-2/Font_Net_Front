import { FontContent } from "@/common/api/controllers/font/types";
import { Center, Loader, Stack, Text } from "@mantine/core";
import React, { useEffect } from "react";
import useFontConvert from "../hooks/useFontConvert";

type Props = {
	sourceFile: File | Blob;
	onConvert: (font: FontContent) => void;
	force?: boolean;
};

const FontConvert: React.FC<Props> = ({
	sourceFile,
	onConvert,
	force = false,
}) => {
	const { data, error, loaded } = useFontConvert(sourceFile, force);

	useEffect(() => {
		if (loaded && error === undefined) onConvert(data!.content!);
	}, [loaded, error, data, onConvert]);

	return (
		<>
			{!loaded && (
				<Center>
					<Stack>
						<Loader m="auto" />
						<Text>
							Ваш запрос находится в очереди, процесс обработки
							может занять какое-то время
						</Text>
					</Stack>
				</Center>
			)}
			{loaded && error}
		</>
	);
};

export default React.memo(FontConvert);
