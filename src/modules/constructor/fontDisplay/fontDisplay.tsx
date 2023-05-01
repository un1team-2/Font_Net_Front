import { FontContent } from "@/common/api/controllers/font/types";
import {
	ActionIcon,
	Button,
	Container,
	Group,
	Skeleton,
	TextInput,
	useMantineTheme,
} from "@mantine/core";
import { useLocalStorage } from "@mantine/hooks";
import { IconArrowRight, IconDownload } from "@tabler/icons-react";
import React, { useEffect, useRef, useState } from "react";
import useFontFile from "../hooks/useFontFile";
import FontPrerender from "./fontPrerender";

type Props = {
	font: FontContent;
	onForcePrerenderClick: () => void;
};

const FontDisplay: React.FC<Props> = ({ font, onForcePrerenderClick }) => {
	const [text, setText] = useLocalStorage({
		key: "constructorPrerenderText",
		defaultValue: "",
	});
	const [inputText, setInputText] = useState(text);
	const textInputRef = useRef<HTMLInputElement>(null);
	const theme = useMantineTheme();
	const { file, error: fileError, loaded: fileLoaded } = useFontFile(font.id);

	useEffect(() => {
		setInputText(text);
	}, [text]);

	if (!fileLoaded)
		return (
			<Container w={720}>
				<Group position="apart">
					<Skeleton height={36} width={209} radius="md" />
					<Skeleton height={36} width={277} radius="md" />
				</Group>
				<Skeleton mt="md" height={457} radius="md" />
			</Container>
		);
	if (fileError !== undefined) return <p>{fileError}</p>;

	const onChangeTextClick = () => {
		if (!textInputRef.current) return;
		setText(textInputRef.current.value);
	};
	const fileURL = URL.createObjectURL(file!);

	return (
		<Container w={720}>
			<Group w="100%" align="end" position="apart">
				<TextInput
					ref={textInputRef}
					label="Текст предпоказа"
					placeholder="Съешь ещё этих мягких французских булок да выпей чаю. English text"
					value={inputText}
					onChange={(e) => setInputText(e.target.value)}
					rightSection={
						<ActionIcon
							color={theme.primaryColor}
							variant="filled"
							onClick={onChangeTextClick}
						>
							<IconArrowRight />
						</ActionIcon>
					}
				/>
				<Button.Group>
					<Button
						variant="default"
						color="gray"
						onClick={onForcePrerenderClick}
                        disabled
					>
						Перевести заново
					</Button>
					<Button
						component="a"
						href={fileURL}
						download={font.name + font.extension}
						leftIcon={<IconDownload />}
					>
						Скачать
					</Button>
				</Button.Group>
			</Group>
			<FontPrerender font={font} text={text} />
		</Container>
	);
};

export default React.memo(FontDisplay);
