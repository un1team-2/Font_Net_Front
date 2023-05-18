import { Accordion, Container, Text } from "@mantine/core";
import React from "react";
import { useStyles } from './questionBlock.style';

const QuestionBlock: React.FC = () => {
	const { classes } = useStyles();
	return (
    <div>
			<Text
			className={classes.title}
					size="xl"
					variant="gradient"
					gradient={{ from: "violet", to: "indigo", deg: 45 }}
					weight={500}
				>
					Вопросы
				</Text>
        <Accordion className={classes.accordion} variant="separated" radius="xl" defaultValue="customization" >
          <Accordion.Item value="customization">
            <Accordion.Control className={classes.text} >
			Почему мы?
				</Accordion.Control>
            <Accordion.Panel>Ясность нашей позиции очевидна: убеждённость некоторых оппонентов является качественно новой ступенью системы массового участия. Разнообразный и богатый опыт говорит нам, что семантический разбор внешних противодействий способствует повышению качества соответствующих условий активизации.</Accordion.Panel>
          </Accordion.Item>
    
          <Accordion.Item value="flexibility">
            <Accordion.Control  className={classes.text} >Flexibility</Accordion.Control>
            <Accordion.Panel>Configure components appearance and behavior with vast amount of settings or overwrite any part of component styles</Accordion.Panel>
          </Accordion.Item>
    
          <Accordion.Item value="focus-ring">
            <Accordion.Control  className={classes.text} >No annoying focus ring</Accordion.Control>
            <Accordion.Panel>With new :focus-visible pseudo-class focus ring appears only when user navigates with keyboard</Accordion.Panel>
          </Accordion.Item>
        </Accordion>
        </div>
      );
};

export default React.memo(QuestionBlock);
