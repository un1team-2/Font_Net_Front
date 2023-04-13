import DropZone from "@/modules/constructor/dropzone";
import { Container } from "@mantine/core";
import { NextPage } from "next";

const ConstructorPage: NextPage = () => {
	return (
        <Container size="md">
            <DropZone />
        </Container>
    );
};

export default ConstructorPage;
