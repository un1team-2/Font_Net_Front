import { Header } from "@/components/base-components-font-net/base-header";
import TextCard from "@/components/base-components-font-net/base-text-card/base-text-card";
import { Container } from "@mantine/core";
import CardsCarousel from "@/components/base-components-font-net/base-corousel/base-carousel";
import { NextPage } from "next";

const IndexPage: NextPage = () => {
	return (
		<>
			<Header></Header>
			<Container my="md">
				<TextCard
					title="Первый инструмент для перевода шрифта на русский с помощью И.И."
					text="FontNET - принципиально новая технология, которая автоматически переводит шрифты под отдельные языки. В основе работы системы лежит нейросеть, которая стилизует символы по заданному образцу"
				></TextCard>
				<CardsCarousel />
				<TextCard
					title="И это не все шрифты обработанные на отлично с помощью FontNet "
					text="Вы можете попробовать это лично, наш конструктор уже научился адаптировать 95% иностранных шрифтов, попробуйте и вы!"
				></TextCard>
			</Container>
		</>
	);
};

export default IndexPage;
