import Ad from "../ad";
import styles from "./bigSocial.module.scss";
import { Text } from "@mantine/core";
import React from "react";

const BigSocial: React.FC = () => {
	return (
		<>
			<div className={styles.social__title}>
				<Text
					variant="gradient"
					gradient={{ from: "indigo6", to: "grape6", deg: 45 }}
				>
					Telegram
				</Text>
				<a href="https://t.me/fontrus" title="telegram">
					<Ad height={400} width={400} imageSrc="/tgqr.png" />
				</a>
			</div>
		</>
	);
};

export default React.memo(BigSocial);
