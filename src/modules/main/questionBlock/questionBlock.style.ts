import { Center, createStyles, rem } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
	accordion: {
		marginTop: "30px",
        textAlign: 'left',
        fontFamily: `Greycliff CF, ${theme.fontFamily}`,
        gradient: { from: "violet", to: "indigo", deg: 45 }
	},
    title:{
        fontSize: '40px',
        marginTop: '30px',
        textAlign: 'center',
    },
    container:{
        
    },
    text:{
        fontSize: '20px'
    }
}));
