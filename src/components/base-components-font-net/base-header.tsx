import { Navbar, Text,Button } from "@nextui-org/react";
import styles from '../../styles/styles.module.scss'
export default function Header(){
  
    return (
      <Navbar variant="sticky" className={styles.navBar}>
        <Navbar.Brand>
          <Text b color="inherit" hideIn="xs">
            FontNet
          </Text>
        </Navbar.Brand>
        <Navbar.Content
          enableCursorHighlight
          activeColor="primary"
          hideIn="xs"
          variant="underline"
        >
          <Navbar.Link isActive href="#">
          Главная
          </Navbar.Link>
          <Navbar.Link href="#">Конструктор</Navbar.Link>
          <Navbar.Link href="#">О нас</Navbar.Link>
        </Navbar.Content>
      </Navbar>
    )
}