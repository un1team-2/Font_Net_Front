import { FontContent } from "@/common/api/controllers/font/types";
import { FontConvert, FontUpload, FontDisplay } from "@/modules/constructor";
import { Container } from "@mantine/core";
import { FileWithPath } from "@mantine/dropzone";
import { NextPage } from "next";
import { useState } from "react";

const ConstructorPage: NextPage = () => {
	const [sourceFile, setSourceFile] = useState<FileWithPath>();
	const [font, setFont] = useState<FontContent>();
	const [force, setForce] = useState(false);

	const onForceClick = () => {
		setFont(undefined);
		setForce(true);
	};

	return (
		<Container size="md">
			{sourceFile === undefined && (
				<FontUpload onDrop={(f) => setSourceFile(f[0])} />
			)}
			{sourceFile && font === undefined && (
				<FontConvert sourceFile={sourceFile} onConvert={setFont} force={force} />
			)}
			{font !== undefined && (
				<FontDisplay
					font={font}
					onForcePrerenderClick={onForceClick}
				/>
			)}
		</Container>
	);
};

export default ConstructorPage;
