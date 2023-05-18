import {
	Header,
	Container,
	Group,
	Burger,
	Paper,
	Transition,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { useStyles, HEADER_HEIGHT } from "./header.style";
import { useRouter } from "next/router";
import Link from "next/link";
import ThemeToggle from "@/common/components/themeToggle";
import React from "react";
import BrandIcon from "@/common/components/brandIcon";

const links: { link: string; label: string }[] = [
	{ link: "/", label: "Главная" },
	// { link: "/constructor", label: "Конструктор" },
	// { link: "/about", label: "О нас" },
];

const HeaderResponsive: React.FC = () => {
	const router = useRouter();
	const [opened, { toggle, close }] = useDisclosure(false);
	const { classes, cx } = useStyles();

	const items = links.map((link) => (
		<Link
			key={link.label}
			href={link.link}
			className={cx(classes.link, {
				[classes.linkActive]: router.pathname === link.link,
			})}
			onClick={(event) => {
				close();
			}}
		>
			{link.label}
		</Link>
	));

	return (
		<Header height={HEADER_HEIGHT} mb={120} className={classes.root}>
			<Container size="lg" className={classes.header}>
				<BrandIcon />
				<Group spacing={5} className={classes.links}>
					{items}
				</Group>

				<Group>
					<Burger
						opened={opened}
						onClick={toggle}
						className={classes.burger}
						size="sm"
					/>
					<ThemeToggle />
				</Group>

				<Transition
					transition="pop-top-right"
					duration={200}
					mounted={opened}
				>
					{(styles) => (
						<Paper
							className={classes.dropdown}
							withBorder
							style={styles}
						>
							{items}
						</Paper>
					)}
				</Transition>
			</Container>
		</Header>
	);
};

export default React.memo(HeaderResponsive);
