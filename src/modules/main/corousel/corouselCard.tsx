import { Paper } from "@mantine/core";
import React from "react";
import { useStyles } from "./corouselCard.style";

type Props = {
	image: string;
};

const Card: React.FC<Props> = ({ image }) => {
	const { classes } = useStyles();

	return (
		<Paper
			shadow="md"
			p="xl"
			radius="md"
			sx={{ backgroundImage: `url(${image})` }}
			className={classes.card}
		></Paper>
	);
};

export default React.memo(Card);
