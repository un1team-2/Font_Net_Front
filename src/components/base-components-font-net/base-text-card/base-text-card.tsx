import { Text } from "@mantine/core";
import { Card, Group } from "@mantine/core";
import React from "react";
import { useStyles } from "./styles";

type Props = {
	text: string;
	title: string;
};

const TextCard: React.FC<Props> = ({ text, title }) => {
	const { classes } = useStyles();
	return (
		<Card
			className={classes.card}
			shadow="sm"
			padding="lg"
			radius="md"
			withBorder
		>
			<Group position="apart" mt="md" mb="xs">
				<Text
					size="xl"
					variant="gradient"
					gradient={{ from: "violet", to: "indigo", deg: 45 }}
					weight={500}
				>
					{title}
				</Text>
			</Group>

			<Text size="xl" color="dimmed">
				{text}
			</Text>
		</Card>
	);
};

export default React.memo(TextCard);
