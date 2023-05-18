import { Text, Card, Group } from "@mantine/core";
import React from "react";
import { useStyles } from "./textCard.style";

type Props = {
	text: string;
	title: string;
	id?: string;
};

const TextCard: React.FC<Props> = ({ text, title, id }) => {
	const { classes } = useStyles();
	return (
		<Card
			className={classes.card}
			shadow="sm"
			padding="lg"
			radius="md"
			withBorder
			id={id}
		>
			<Group position="apart">
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
