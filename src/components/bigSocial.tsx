import { Container, Text } from "@mantine/core";
import Image from "next/image";
import React from "react";

type Props = {
	imageSrc: string;
	title: string;
};

const BigSocial: React.FC<Props> = ({ imageSrc, title }) => {
	return (
		<Container size="md">
			<Text
				size={40}
				variant="gradient"
				gradient={{ from: "indigo6", to: "grape6", deg: 45 }}
				weight="bold"
			>
				{title}
			</Text>
			<Image
				src={imageSrc}
				alt="Default Image"
				width={300}
				height={200}
			/>
		</Container>
	);
};
export default React.memo(BigSocial);
