import Question from "./question";
import { Container, Text } from "@mantine/core";
import React from "react";

const QuestionBlock: React.FC = () => {
	return (
		<>
			<Container size="md">
				<Text
					size={40}
					variant="gradient"
					gradient={{ from: "indigo6", to: "grape6", deg: 45 }}
					weight="bold"
				>
					Вопросы
				</Text>
			</Container>
			<Question
				title="- Как пользоваться?"
				text="Все просто идите туда возьмите то принесите это"
			></Question>
			<Question
				title="- Почему мы?"
				text="Все просто идите туда возьмите то принесите это"
			></Question>
			<Question
				title="- Если я лемур?"
				text="Все просто идите туда возьмите то принесите это"
			></Question>
			<Question
				title="- Бегемоты по программе трейд ин?"
				text="Все просто идите туда возьмите то принесите это"
			></Question>
			<Question
				title="- Смысл жизни?"
				text="Все просто идите туда возьмите то принесите это"
			></Question>
		</>
	);
};

export default React.memo(QuestionBlock);
