import React from 'react';
import DayValue  from './DayValue';
import styled from 'styled-components';

const DayStyle = styled.div`
    width: 740px;
    display: grid;
    grid-template-columns: repeat(7,1fr);
    border: solid red;
`


const DaysOfTheWeek = (props) => {
    return (
        <DayStyle>
        <DayValue name='Mon'/>
        <DayValue name='Tue'/>
        <DayValue name='Wed'/>
        <DayValue name='Thu'/>
        <DayValue name='Fri'/>
        <DayValue name='Sat'/>
        <DayValue name='Sun'/>
        </DayStyle>
    )
}
export default DaysOfTheWeek;