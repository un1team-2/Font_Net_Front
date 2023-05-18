import {
    createStyles,
    Image,
    Container,
    Title,
    Button,
    Group,
    Text,
    List,
    ThemeIcon,
    rem,
  } from '@mantine/core';
  import { IconCheck } from '@tabler/icons-react';
import React from 'react';
import image from './image_leadH.svg';
  
  const useStyles = createStyles((theme) => ({
    inner: {
      display: 'flex',
      marginTop:'-100px',
      justifyContent: 'space-between',
      paddingTop: `calc(${theme.spacing.xl} * 4)`,
      paddingBottom: `calc(${theme.spacing.xl} * 4)`,
    },
  
    content: {
      maxWidth: rem(480),
      marginRight: `calc(${theme.spacing.xl} * 3)`,
  
      [theme.fn.smallerThan('md')]: {
        maxWidth: '100%',
        marginRight: 0,
      },
    },
  
    title: {
      color: theme.colorScheme === 'dark' ? theme.white : theme.black,
      fontFamily: `Greycliff CF, ${theme.fontFamily}`,
      fontSize: rem(44),
      lineHeight: 1.2,
      fontWeight: 900,
  
      [theme.fn.smallerThan('xs')]: {
        fontSize: rem(28),
      },
    },
    link:{
        color: 'white',
        textDecoration: 'none'
    },
  
    control: {
      [theme.fn.smallerThan('xs')]: {
        flex: 1,
      },
    },
  
    image: {
      flex: 1,
  
      [theme.fn.smallerThan('md')]: {
        display: 'none',
      },
    },
  
    highlight: {
      position: 'relative',
      backgroundColor: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).background,
      borderRadius: theme.radius.sm,
      padding: `${rem(4)} ${rem(12)}`,
    },
  }));
  
  const LeadHeader: React.FC = () => {
    const { classes } = useStyles();
    return (
      <div>
          <div className={classes.inner} >
            <div className={classes.content}>
              <Title className={classes.title}>
                Мы <span className={classes.highlight}>Уникальный</span> ИИ инструмент <br /> для творческих личностей!
              </Title>
              <Text color="dimmed" mt="md">
                Наш сервис занимается адаптацией инностранных шрифтов под кириллицу!
              </Text>
  
              <List
                mt={30}
                spacing="sm"
                size="sm"
                icon={
                  <ThemeIcon size={20} radius="xl">
                    <IconCheck size={rem(12)} stroke={1.5} />
                  </ThemeIcon>
                }
              >
                <List.Item>
                  <b>Машинное обучение</b> – Используем МЛ для качественной обработки шрифтов
                </List.Item>
                <List.Item>
                  <b>Файлы в .ttf, .otf и др. форматах</b> – Чтобы дизайнерам, блогерам и другим креативным профессиям было удобно использовать наши креативные решения!
                </List.Item>
                <List.Item>
                  <b>Free to use</b> – Пока проект в стадии альфа тестирования, мы предлагаем вам самим попробовать!
                </List.Item>
              </List>
            </div>
            <Image src={image.src} className={classes.image} />
          </div> 
      </div>
    );
  }
  export default React.memo(LeadHeader);