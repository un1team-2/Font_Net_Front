import { Header } from "@/components/base-components-font-net/base-header";
import TextCard from "@/components/base-components-font-net/base-text-card/base-text-card";
import EnterContent from "@/components/base-components-font-net/base-enter-content";
import { Text, Container } from '@mantine/core';
import FontImagesConent from "@/components/base-components-font-net/font-images-content";
import QuestionBlock from "@/components/base-components-font-net/base-questions";
import BigSocial from "@/components/base-components-font-net/base-big-social";
import { globalCss } from '@nextui-org/react';
import CardsCarousel from "@/components/base-components-font-net/base-corousel/base-carousel";

export default function Main() {

    return (
        <>
            <Header></Header>
            <Container my='md'>
                <TextCard title="Первый инструмент для перевода шрифта на русский с помощью И.И." text="FontNET - принципиально новая технология, которая автоматически переводит шрифты под отдельные языки. В основе работы системы лежит нейросеть, которая стилизует символы по заданному образцу"></TextCard>
                <CardsCarousel />
                <TextCard title="И это не все шрифты обработанные на отлично с помощью FontNet " text="Вы можете попробовать это лично, наш конструктор уже научился адаптировать 95% иностранных шрифтов, попробуйте и вы!"></TextCard>
            </Container>
        </>
    )
}