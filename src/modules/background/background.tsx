import React from 'react';
import Circle from './circle';

const Background: React.FC = () => {

    return (
        <>
        <Circle x={100} y={100}></Circle>
        <Circle x={400} y={200}></Circle>
        <Circle x={1500} y={100}></Circle>
        <Circle x={1800} y={500}></Circle>
        <Circle x={600} y={700}></Circle>
        
        </>
    );
}
export default React.memo(Background);