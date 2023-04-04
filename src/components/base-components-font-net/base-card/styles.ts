import {
    createStyles,
    rem,
} from '@mantine/core';

export const useStyles = createStyles((theme) => ({
    card: {
        height: rem(240),
        marginTop: '30px',
        display: 'flex',
        flexDirection: 'column',
        borderRadius: '10px',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        [theme.fn.smallerThan('sm')]: {
            height: '300px',
            borderRadius: '10px'
        },
    },

    title: {
        fontFamily: `Greycliff CF, ${theme.fontFamily}`,
        fontWeight: 900,
        color: theme.white,
        lineHeight: 1.2,
        fontSize: rem(32),
        marginTop: theme.spacing.xs,
    },

    category: {
        color: theme.white,
        opacity: 0.7,
        fontWeight: 700,
        textTransform: 'uppercase',
    },
}));
