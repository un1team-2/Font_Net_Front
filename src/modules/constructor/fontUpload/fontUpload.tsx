import { Dropzone as MDropZone, FileWithPath } from "@mantine/dropzone";
import { Group, Text, useMantineTheme, rem } from "@mantine/core";
import { IconUpload, IconX, IconFileUpload } from "@tabler/icons-react";
import React from "react";

type Props = {
	onDrop: (files: FileWithPath[]) => void;
};

const FontUpload: React.FC<Props> = ({ onDrop }) => {
	const theme = useMantineTheme();

	return (
		<MDropZone
			maxSize={3 * 1024 ** 2}
			accept={["font/ttf", "font/woff", "font/woff2", "font/otf"]}
			onDrop={onDrop}
			multiple={false}
		>
			<Group
				position="center"
				spacing="xl"
				style={{ minHeight: rem(220), pointerEvents: "none" }}
			>
				<MDropZone.Accept>
					<IconUpload
						size="3.2rem"
						color={
							theme.colors[theme.primaryColor][
								theme.colorScheme === "dark" ? 4 : 6
							]
						}
					/>
				</MDropZone.Accept>
				<MDropZone.Reject>
					<IconX
						size="3.2rem"
						color={
							theme.colors.red[
								theme.colorScheme === "dark" ? 4 : 6
							]
						}
					/>
				</MDropZone.Reject>
				<MDropZone.Idle>
					<IconFileUpload stroke="1.5" size="3.2rem" />
				</MDropZone.Idle>
				<div>
					<Text size="xl" inline>
						Перетащите файл шрифта сюда или нажмите для выбора
						шрифта
					</Text>
				</div>
			</Group>
		</MDropZone>
	);
};

export default React.memo(FontUpload);
