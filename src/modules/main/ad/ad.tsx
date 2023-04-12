import Image from "next/image";
import React from "react";
import styles from "./ad.module.scss";

type Props = {
	imageSrc: string;
	height: number;
	width: number;
};

const Ad: React.FC<Props> = ({ imageSrc, height, width }) => {
	return (
		<Image
			src={imageSrc}
			alt="Default Image"
			width={width}
			height={height}
			className={styles.images}
		/>
	);
};
export default React.memo(Ad);
