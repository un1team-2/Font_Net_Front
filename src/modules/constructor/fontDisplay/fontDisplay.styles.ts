import { createStyles } from "@mantine/core";

const useFontDisplayStyles = createStyles((theme) => ({
	prerender: {
		border: `1px solid ${theme.colors.dark[9]}`,
		borderRadius: theme.radius.md,
		marginTop: theme.spacing.md,
	},
}));

export default useFontDisplayStyles;
