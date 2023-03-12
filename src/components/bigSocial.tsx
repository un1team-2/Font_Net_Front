import { Navbar, Text,Button, Container, Card, Image } from "@nextui-org/react";
import styles from '../styles/styles.module.scss'

type Props = {imageSrc:string, title:string}
const bigSocial: React.FC<Props> = ({imageSrc,title}) => {
    return (
      <Container md>
        <Text
        h1
        size={40}
        css={{
          textGradient: "45deg, $blue600 -20%, $pink600 50%",
        }}
        weight="bold"
      >
        {title}
      </Text>
      <Image
          src={imageSrc}
          alt="Default Image"
          width={300}
          height={200}
        />
      </Container>
    )
}
export default bigSocial;