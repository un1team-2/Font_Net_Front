import { FontContent } from "@/common/api/controllers/font/types";
import { Loader } from "@mantine/core";
import React, { useEffect } from "react";
import useFontConvert from "../hooks/useFontConvert";

type Props = {
	sourceFile: File | Blob;
	onConvert: (font: FontContent) => void;
};

const FontConvert: React.FC<Props> = ({ sourceFile, onConvert }) => {
	const { data, error, loaded } = useFontConvert(sourceFile);

	useEffect(() => {
		if (loaded && error === undefined) onConvert(data!.content!);
	}, [loaded, error, data, onConvert]);

	return (
		<>
			{!loaded && <Loader />}
			{loaded && error}
		</>
	);
};

export default React.memo(FontConvert);
