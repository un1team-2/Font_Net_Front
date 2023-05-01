import { FontContent } from "@/common/api/controllers/font/types";
import { Skeleton, Image } from "@mantine/core";
import React from "react";
import useFontPrerender from "../hooks/useFontPrerender";
import useFontDisplayStyles from "./fontDisplay.styles";

type Props = {
	font: FontContent;
	text?: string;
};

const FontPrerender: React.FC<Props> = ({ font, text }) => {
	const { classes } = useFontDisplayStyles();
	const {
		prerender,
		error: prerenderErr,
		loaded: prerenderLoaded,
	} = useFontPrerender(font.id, text);

	if (!prerenderLoaded) return <Skeleton mt="md" height={457} radius="md" />;
	if (prerenderErr) return <p>{prerenderErr}</p>;

	const imageURL = URL.createObjectURL(prerender!);

	return (
		<div className={classes.prerender}>
			<Image
				radius="md"
				src={imageURL}
				alt="Предпросмотр результата"
				withPlaceholder
			/>
		</div>
	);
};

export default React.memo(FontPrerender);
