import { NextPage } from "next";
import { ContactUs } from "@/modules/main";
import { Container } from "@mantine/core";

const AboutPage: NextPage = () => {
	return( <Container my="md">
			<ContactUs></ContactUs>
		</Container>);
};

export default AboutPage;
