import { Corousel, TextCard, QuestionBlock } from "@/modules/main";
import { Container } from "@mantine/core";
import { NextPage } from "next";
import { Footer } from "@mantine/core";
import {LeadHeader} from "@/modules/main";

const IndexPage: NextPage = () => {
	return (
		<Container size="lg">
			<LeadHeader></LeadHeader>
			<TextCard
				title="Первый инструмент для перевода шрифта на русский с помощью И.И."
				text="FontNET - принципиально новая технология, которая автоматически переводит шрифты под отдельные языки. В основе работы системы лежит нейросеть, которая стилизует символы по заданному образцу"
			></TextCard>
			<Corousel />
			<TextCard
				title="И это не все шрифты обработанные на отлично с помощью FontNet "
				text="Вы можете попробовать это лично, наш конструктор уже научился адаптировать 95% иностранных шрифтов, попробуйте и вы!"
			></TextCard>
			<QuestionBlock></QuestionBlock>
			<Footer children={undefined} height={"100"}></Footer>
		</Container>
	);
};

export default IndexPage;
