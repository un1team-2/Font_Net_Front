import { Navbar, Text,Button, Container, Grid } from "@nextui-org/react";
import Image from "next/image";
import styles from '../styles/styles.module.scss'

type Props = {imageSrc:string, height:number, width:number}
const Ad: React.FC<Props> = ({imageSrc,height, width}) => {
    return (
        <Image
          src={imageSrc}
          alt="Default Image"
          width={width}
          height={height}
          className={styles.images}
        />
    )
}
export default Ad;