import Ad from "./ad";
import Card from "./card";
import { SimpleGrid } from "@mantine/core";
import React from "react";

const ImagesContent: React.FC = () => {
	return (
		<SimpleGrid cols={4}>
			<Ad height={240} width={470} imageSrc="/pumkin.jpg" />
			<Ad height={240} width={470} imageSrc="/kangmas.png" />
			<Ad height={240} width={470} imageSrc="/medeni.png" />
			<Card
				width={470}
				title="И это не все шрифты обработанные на отлично с помощью FontNet"
				text="Вы можете попробовать это лично, наш конструктор уже научился адаптировать 95% иностранных шрифтов, попробуйте и вы!"
			></Card>
		</SimpleGrid>
	);
};

export default React.memo(ImagesContent);
