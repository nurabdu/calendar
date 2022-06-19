import React from 'react';
import Event from './Event';
import styled from 'styled-components';

const Date = styled.div`
    display: flex;
    flex-direction: column;
    width: 95px;
    height: 95px;
    border: solid black;
`;
const TheDate = (props) => {
    return (
        <Date>
            <div>
            {props.date}
            </div>
            <Event eventText={'event date'}/>
        </Date>
    )
}
export default TheDate;