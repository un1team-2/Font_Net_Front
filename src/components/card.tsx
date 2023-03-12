import { Card, Grid, Text, Button, Row, Container } from "@nextui-org/react";
import { title } from "process";
import styles from '../styles/styles.module.scss'

type Props = {
  text: string,
  title: string,
  width?: number | string,
}

const CardUi: React.FC<Props> = ({ text, title, width }) => {
  return (
      <Card css={{width: width ?? 'auto'}}>
        <Card.Header>
          <Text h3 b css={{
            textGradient: "45deg, $blue600 -20%, $pink600 50%",
          }}
            weight="bold">{title}</Text>
        </Card.Header>
        <Card.Divider />
        <Card.Body css={{ py: "$10" }}>
          <Text>{text}</Text>
        </Card.Body>
        <Card.Divider />
      </Card>
  );
}
export default CardUi;