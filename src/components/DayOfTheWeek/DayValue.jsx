import React from 'react';
import styled from 'styled-components';

const DayStl = styled.div`
height: 40px;
border: solid;
justify-content: center;
align-items: center;
display: flex;
`;
export default function DayValue(props) {
    return (
        <DayStl>
            <div>{props.name}</div>
        </DayStl>
    )
};
