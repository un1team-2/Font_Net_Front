import { Text as MText } from "@mantine/core";
import React from "react";
import styles from "../styles/styles.module.scss";

type Props = {
	text: string;
};

const Text: React.FC<Props> = ({ text }) => {
	return (
		<>
			<MText className={styles.text} size="xl">
				{text}
			</MText>
		</>
	);
};

export default React.memo(Text);
