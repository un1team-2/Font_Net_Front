import { useState } from 'react';
import {
  createStyles,
  Header,
  Container,
  Group,
  Burger,
  Paper,
  Transition,
  rem,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { useStyles, HEADER_HEIGHT } from './styles';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';
import ThemeToggle from '@/components/themeToggle';

const links: { link: string; label: string }[] = [
  { link: '/', label: 'Главная' },
  { link: '/constructor', label: 'Конструктор' },
  { link: '/about', label: 'О нас' }
];

export default function HeaderResponsive() {
  const router = useRouter();
  const [opened, { toggle, close }] = useDisclosure(false);
  const { classes, cx } = useStyles();

  const items = links.map((link) => (
    <Link
      key={link.label}
      href={link.link}
      className={cx(classes.link, { [classes.linkActive]: router.pathname === link.link })}
      onClick={(event) => {
        close();
      }}
    >
      {link.label}
    </Link>
  ));

  return (
    <Header height={HEADER_HEIGHT} mb={120} className={classes.root}>
      <Container className={classes.header}>
        <Image src={'/vercel.svg'} alt="logo" height={28} width={100} />
        <Group spacing={5} className={classes.links}>
          {items}
        </Group>

        <Group>
          <Burger opened={opened} onClick={toggle} className={classes.burger} size="sm" />
          <ThemeToggle />
        </Group>

        <Transition transition="pop-top-right" duration={200} mounted={opened}>
          {(styles) => (
            <Paper className={classes.dropdown} withBorder style={styles}>
              {items}
            </Paper>
          )}
        </Transition>
      </Container>
    </Header>
  );
}