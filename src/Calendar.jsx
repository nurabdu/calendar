import React from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import DaysOfTheWeek from './components/DayOfTheWeek/DaysOfTheWeek';
import TheDate from './components/TheDate';
import styled from 'styled-components';

const CalendarStyle = styled.div`
    display: grid;
    height: auto;
    width: 740px;
    grid-template-columns: repeat(7, 1fr);
  
`;

const Calendar = (props) => {

    const calendar = useSelector(state => state.calendar)

    const [dateDay, setdateDay] = useState(calendar);

    const theDay = dateDay.map((obj) => {
        return <TheDate key={obj.id} date={obj.empty} month={obj.month} />
    })
    return (
        <>
            <DaysOfTheWeek />
            <CalendarStyle>
                {theDay}
            </CalendarStyle>
        </>
    )
}
export default Calendar;