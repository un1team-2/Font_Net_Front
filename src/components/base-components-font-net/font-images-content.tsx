import { Navbar, Dropdown, Button, Link, Text, Container, Grid, Card } from "@nextui-org/react";
import Ad from "../ad";
import CardUi from "../card";
import styles from '../../styles/styles.module.scss'
export default function EnterConent() {

    return (
        <>
            <Grid.Container gap={2}>
                <Grid xs={12} md={6} justify="center">
                    <Ad height={240} width={470} imageSrc="/pumkin.jpg" />
                </Grid>
                <Grid xs={12} md={6} justify="center">
                    <Ad height={240} width={470} imageSrc="/kangmas.png" />
                </Grid>

                <Grid xs={12} md={6} justify="center">
                    <Ad height={240} width={470} imageSrc="/medeni.png" />
                </Grid>
                <Grid xs={12} md={6} justify="center">
                    <CardUi width={470} title="И это не все шрифты обработанные на отлично с помощью FontNet" text="Вы можете попробовать это лично, наш конструктор уже научился адаптировать 95% иностранных шрифтов, попробуйте и вы!"></CardUi>
                </Grid>
            </Grid.Container>
        </>
    )
}