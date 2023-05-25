import { Accordion, Container, Text } from "@mantine/core";
import React from "react";
import { useStyles } from "./questionBlock.style";

const QuestionBlock: React.FC = () => {
	const { classes } = useStyles();
	return (
		<div id="faq">
			<Text
				className={classes.title}
				size="xl"
				variant="gradient"
				gradient={{ from: "violet", to: "indigo", deg: 45 }}
				weight={500}
			>
				Вопросы
			</Text>
			<Accordion
				className={classes.accordion}
				variant="separated"
				radius="xl"
				defaultValue="customization"
			>
				<Accordion.Item value="customization">
					<Accordion.Control className={classes.text}>
						Почему мы?
					</Accordion.Control>
					<Accordion.Panel>
						Мы удобный продукт для творческих личностей, дизайнеров, блогеров, редакторов и т.д. Мы предоставляем качественный и протестированный продукт, так что пользуйтесь!
					</Accordion.Panel>
				</Accordion.Item>

				<Accordion.Item value="flexibility">
					<Accordion.Control className={classes.text}>
						Как нас поддержать?
					</Accordion.Control>
					<Accordion.Panel>
						Пишите нам в комментариях отзывы о нашем продукте и делитесь с друзьями:)
					</Accordion.Panel>
				</Accordion.Item>

				<Accordion.Item value="focus-ring">
					<Accordion.Control className={classes.text}>
						Кто мы?
					</Accordion.Control>
					<Accordion.Panel>
						Мы группа разработчиков состоящая из нескольких коллег, работаем над улучшением контентной жизни людей!
					</Accordion.Panel>
				</Accordion.Item>
			</Accordion>
		</div>
	);
};

export default React.memo(QuestionBlock);
