import { Card as MCard, Text } from "@mantine/core";
import React from "react";

type Props = {
	text: string;
	title: string;
	width?: number | string;
};

const Card: React.FC<Props> = ({ text, title, width }) => {
	return (
		<MCard w={width ?? "auto"}>
			<MCard.Section>
				<Text
					variant="gradient"
					gradient={{ from: "indigo6", to: "grape6", deg: 45 }}
					weight="bold"
				>
					{title}
				</Text>
			</MCard.Section>
			<MCard.Section>
				<Text>{text}</Text>
			</MCard.Section>
		</MCard>
	);
};
export default React.memo(Card);
