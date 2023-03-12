import { Navbar, Dropdown, Button, Link, Text, Container, Grid, Card } from "@nextui-org/react";
import Questions from "../questionBlock";
import Ad from "../ad";
import CardUi from "../card";
import styles from '../styles/styles.module.scss'
export default function QuestionBlock() {

    return (
        <>
            <Container md>
                <Text h1
                    size={40}
                    css={{
                        textGradient: "45deg, $blue600 -20%, $pink600 50%",
                    }}
                    weight="bold">Вопросы</Text>
            </Container>
            <Questions title='- Как пользоваться?' text="Все просто идите туда возьмите то принесите это"></Questions>
            <Questions title='- Почему мы?' text="Все просто идите туда возьмите то принесите это"></Questions>
            <Questions title='- Если я лемур?' text="Все просто идите туда возьмите то принесите это"></Questions>
            <Questions title='- Бегемоты по программе трейд ин?' text="Все просто идите туда возьмите то принесите это"></Questions>
            <Questions title='- Смысл жизни?' text="Все просто идите туда возьмите то принесите это"></Questions>
        </>
    )
}