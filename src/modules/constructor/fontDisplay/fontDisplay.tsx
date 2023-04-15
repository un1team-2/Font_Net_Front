import { FontContent } from "@/common/api/controllers/font/types";
import { Button, Skeleton } from "@mantine/core";
import React from "react";
import useFontFile from "../hooks/useFontFile";
import useFontPrerender from "../hooks/useFontPrerender";

type Props = {
	font: FontContent;
};

const FontDisplay: React.FC<Props> = ({ font }) => {
	const {
		prerender,
		error: prerenderErr,
		loaded: prerenderLoaded,
	} = useFontPrerender(font.id);
	const { file, error: fileError, loaded: fileLoaded } = useFontFile(font.id);

	if (!prerenderLoaded || !fileLoaded)
		return (
			<>
				<Skeleton height={300} radius="md" />
				<Skeleton height={40} width={100} radius="md" />
			</>
		);
	if (prerenderErr !== undefined || fileError !== undefined)
		return (
			<>
				<p>{prerenderErr}</p>
				<p>{fileError}</p>
			</>
		);

	const imageURL = URL.createObjectURL(prerender!);
	const fileURL = URL.createObjectURL(file!);

	return (
		<>
			<img
				src={imageURL}
				alt="Font prerender"
				style={{
					margin: "auto",
					display: "block",
					borderRadius: "10px",
					border: "1px solid gray",
				}}
			/>
			<Button
				variant="light"
				size="md"
				component="a"
				href={fileURL}
				download={font.name + font.extension}
				style={{
					marginTop: "20px",
					marginLeft: "50%",
					transform: "translateX(-50%)",
				}}
			>
				Скачать
			</Button>
		</>
	);
};

export default React.memo(FontDisplay);
