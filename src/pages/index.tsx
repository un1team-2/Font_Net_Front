import { Corousel, TextCard, QuestionBlock } from "@/modules/main";
import { Container, Stack } from "@mantine/core";
import { NextPage } from "next";
import { LeadHeader } from "@/modules/main";
import { Constructor } from "@/modules/constructor";

const IndexPage: NextPage = () => {
	return (
		<Container size="lg">
			<Stack spacing="xl" mb="xl">
				<LeadHeader />
				<Constructor />
				<TextCard
					title="Первый инструмент для перевода шрифта на русский с помощью И.И."
					text="FontNET - принципиально новая технология, которая автоматически переводит шрифты под отдельные языки. В основе работы системы лежит нейросеть, которая стилизует символы по заданному образцу"
                    id="about"
				></TextCard>
				<Corousel />
				<TextCard
					title="И это не все шрифты обработанные на отлично с помощью FontNet "
					text="Вы можете попробовать это лично, наш конструктор уже научился адаптировать 95% иностранных шрифтов, попробуйте и вы!"
				></TextCard>
				<QuestionBlock />
			</Stack>
		</Container>
	);
};

export default IndexPage;
