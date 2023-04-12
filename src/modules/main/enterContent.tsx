import Ad from "./ad";
import Card from "./card";
import { SimpleGrid } from "@mantine/core";
import React from "react";

const EnterContent: React.FC = () => {
	return (
		<SimpleGrid cols={2}>
			<Card
				width={470}
				title="Первый инструмент для перевода шрифта на русский с помощью И.И."
				text="FontNET - принципиально новая технология, которая автоматически переводит шрифты под отдельные языки. В основе работы системы лежит нейросеть, которая стилизует символы по заданному образцу"
			/>
			<Ad height={265} width={470} imageSrc="/azonix.jpg" />
		</SimpleGrid>
	);
};

export default React.memo(EnterContent);
