import {
    Box,
    createStyles,
} from '@mantine/core';

import React from 'react';
type Props = {
	x: number;
	y: number;
};

const useStyles = createStyles((theme) => ({
    inner: {
        background: 'linear-gradient(76deg, rgba(9,9,121,1) 0%, rgba(192,0,255,1) 100%)',
        height: '100px',
        width: '100px',
        borderRadius: '100%'
    },
    container:{
        height: '500px',
        width: '500px',
        filter: 'blur(70px)',
        position: 'fixed'
    }
}));

const Circle: React.FC<Props> = ({x,y}) => {
    const { classes } = useStyles();
    return (
        <Box className={classes.container} sx={{top:y,left:x}}>
            <div className={classes.inner}>
            </div>
        </Box>
    );
}
export default React.memo(Circle);