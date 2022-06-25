import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';

const Date = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 95px;
    height: 95px;
    border: solid black;
`;

const TheDate = (props) => {

    const [date, setDate] = useState([''])

   const handleClick = () => {
       const newDate = prompt(('add date'))
       setDate(newDate)
   }
    return (
        <Date  onClick={handleClick}>
            <span><h3>{props.date}</h3></span>
            <span>{props.month}</span>
            <h3>{date}</h3>
        </Date>
    )
};
export default TheDate;