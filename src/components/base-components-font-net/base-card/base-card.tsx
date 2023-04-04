import { Carousel } from '@mantine/carousel';
import { useMediaQuery } from '@mantine/hooks';
import { createStyles, Paper, Text, Title, Button, useMantineTheme, rem } from '@mantine/core';
import { useStyles } from './styles';

interface CardProps {
    image: string;
  }
function Card({ image}: CardProps) {
  const { classes } = useStyles();

  return (
    <Paper
      shadow="md"
      p="xl"
      radius="md"
      sx={{   backgroundImage: `url(${image})`}}
      className={classes.card}
    >
    </Paper>
  );
}

export default Card;