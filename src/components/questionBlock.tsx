import { Text, Collapse, Box, Button } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import React from "react";

type Props = {
	text: string;
	title: string;
};

const Question: React.FC<Props> = ({ text, title }) => {
	const [opened, { toggle }] = useDisclosure(false);

	return (
		<Box maw="400">
			<Button onClick={toggle}>{title}</Button>
			<Collapse in={opened}>
				<Text>{text}</Text>
			</Collapse>
		</Box>
	);
};

export default React.memo(Question);
