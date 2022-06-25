import React, { useState } from 'react';
import styled from 'styled-components';

const EventStl = styled.div`
input{
  width: 60px;
}
.textp{
  width: 300px;
  height: 300px;
  border: solid red;
}
`;

const Event = () => {
  const [date, setDate] = useState([]);

  let textInput = React.createRef();

  const addDateEvent = () => {
    let addDate = textInput.current.value;

    let dates = [...date, addDate]

    setDate(dates);

    textInput.current.value = ''
  };
  return (
    <EventStl>
      <div>
        <ul>
          {date.map((item, index) => <li key={index.toString()}>{item}</li>)}
        </ul>
        <input type="text" ref={textInput} />
        <button onClick={addDateEvent}>Add Date</button>
      </div>
    </EventStl>
  )
}
export default Event;