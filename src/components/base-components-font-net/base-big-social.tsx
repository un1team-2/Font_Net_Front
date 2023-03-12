import { Navbar, Dropdown, Button, Link, Text, Container, Grid, Card } from "@nextui-org/react";
import Ad from "../ad";
import CardUi from "../card";
import styles from '../../styles/styles.module.scss'
export default function BigSocial() {

    return (
        <>
            <div className={styles.social__title}>
                <Text h3 b css={{
                    textGradient: "45deg, $blue600 -20%, $pink600 50%"
                }}>Telegram</Text>
                <a href="#">
                    <Ad height={400} width={400} imageSrc="/tgqr.png" />
                </a>
            </div>
        </>
    )
}