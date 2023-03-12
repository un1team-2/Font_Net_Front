import { Navbar, Dropdown, Button, Link, Text, Container, Grid, Card } from "@nextui-org/react";
import Ad from "../ad";
import CardUi from "../card";
import styles from '../styles/styles.module.scss'
export default function EnterContent() {

    return (
        <>
            <Grid.Container gap={2}>
                <Grid xs={12} md={6} justify="center">
                    <CardUi width={470} title='Первый инструмент для перевода шрифта на русский с помощью И.И.' text='FontNET - принципиально новая технология, которая автоматически переводит шрифты под отдельные языки. В основе работы системы лежит нейросеть, которая стилизует символы по заданному образцу' />
                </Grid>
                <Grid xs={12} md={6} justify="center">
                    <Ad height={265} width={470} imageSrc="/azonix.jpg" />
                </Grid>
            </Grid.Container>
        </>
    )
}