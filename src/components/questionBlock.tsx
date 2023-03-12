import { Navbar, Text,Button, Container, Card, Collapse } from "@nextui-org/react";
import styles from '../styles/styles.module.scss'

type Props = {text:string, title:string}
const Questions: React.FC<Props> = ({text,title}) => {
    return (
      <Container md>
      <Collapse.Group accordion={false}>
      <Collapse title={title}>
        <Text>
         {text}
        </Text>
      </Collapse>
    </Collapse.Group>
    </Container>
    )
}
export default Questions;