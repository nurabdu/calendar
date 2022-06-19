import React from 'react';
import DaysOfTheWeek from './components/DayOfTheWeek/DaysOfTheWeek';
import TheDate from './components/TheDate';
import styled from 'styled-components';


const CalendarStyle = styled.div`
    display: grid;
    height: auto;
    width: 740px;
    grid-template-columns: repeat(7, 1fr);
  
`;

const numbers = [
    {day: 1, eventday: null}, {day: 2, eventday: null}, {day: 3, eventday: null}, {day: 4, eventday: null}, {day: 5, eventday: null}, {day: 6, eventday: null}, {day: 7, eventday: null}, {day: 8, eventday: null}, {day: 9, eventday: null}, {day: 10, eventday: null},
    {day: 11, eventday: null}, {day: 12, eventday: null}, {day: 13, eventday: null}, {day: 14, eventday: null}, {day: 15, eventday: null}, {day: 16, eventday: null}, {day: 17, eventday: null}, {day: 18, eventday: null},{day: 19, eventday: null}, {day: 20, eventday: null},
    {day: 21, eventday: null}, {day: 22, eventday: null}, {day: 23, eventday: null}, {day: 24, eventday: null}, {day: 25, eventday: null}, {day: 26, eventday: null}, {day: 27, eventday: null}, {day: 28, eventday: null},{day: 29, eventday: null},{day: 30, eventday: null}];
const listItems = numbers.map((number, day) =>
    <TheDate>{number}</TheDate>
);
const Calendar = (props) => {
    return (
        <>
         <DaysOfTheWeek />
            <CalendarStyle>
                    {listItems}
            </CalendarStyle>
        </>
    )
}

export default Calendar;