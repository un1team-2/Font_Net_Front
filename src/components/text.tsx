import { Text } from "@nextui-org/react";
type Props = {text:string}
import styles from '../styles/styles.module.scss'
const TextUi: React.FC<Props> = ({text}) => {
  return (
    <>
      <Text className={styles.text} size="$xl">{text}</Text>
    </>
  );
}

export default TextUi;