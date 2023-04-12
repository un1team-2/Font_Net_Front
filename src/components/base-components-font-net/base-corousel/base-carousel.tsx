import { Carousel } from "@mantine/carousel";
import { useMediaQuery } from "@mantine/hooks";
import { useMantineTheme, rem } from "@mantine/core";
import Card from "../base-card/base-card";
import React from "react";

const data = [
	{
		image: "/pumkin.jpg",
	},
	{
		image: "/kangmas.png",
	},
	{
		image: "/azonix.jpg",
	},
	{
		image: "/medeni.png",
	},
];

const CardsCarousel: React.FC = () => {
	const theme = useMantineTheme();
	const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
	const slides = data.map((item) => (
		<Carousel.Slide key={item.image}>
			<Card {...item} />
		</Carousel.Slide>
	));

	return (
		<Carousel
			loop
			slideSize="50%"
			breakpoints={[
				{ maxWidth: "sm", slideSize: "100%", slideGap: rem(1) },
			]}
			slideGap="xl"
			align="start"
			slidesToScroll={mobile ? 1 : 2}
		>
			{slides}
		</Carousel>
	);
};

export default React.memo(CardsCarousel);
