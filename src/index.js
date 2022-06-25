import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

const defaultDateState = {
   calendar: [
      {id: 1, empty: 30, eventday: '', month: "May" }, {id: 2,  empty: 31, eventday: '', month: "May" }, {id: 3,  empty: 1, eventday: '', month: "June" }, {id: 4,  empty: 2, eventday: '', month: "June" }, {id: 5,  empty: 3, eventday: '', month: "June" },
      {id: 6,  empty: 4, eventday: '', month: "June" }, {id: 7,  empty: 5, eventday: '', month: "June" }, {id: 8,  empty: 6, eventday: '', month: "June" }, {id: 9,  empty: 7, eventday: '', month: "June" }, {id: 10,  empty: 8, eventday: '', month: "June" },
      {id: 11,  empty: 9, eventday: '', month: "June" }, {id: 12,  empty: 10, eventday: '', month: "June" }, {id: 13,  empty: 11, eventday: '', month: "June" }, {id: 14,  empty: 12, eventday: '', month: "June" }, {id: 15,  empty: 13, eventday: '', month: "June" },
      {id: 16,  empty: 14, eventday: '', month: "June" }, {id: 17,  empty: 15, eventday: '', month: "June"}, {id: 18,  empty: 16, eventday: '', month: "June" }, {id: 19,  empty: 17, eventday: '', month: "June" }, {id: 20,  empty: 18, eventday: '', month: "June" },
      {id: 21,  empty: 19, eventday: '', month: "June" }, {id: 22,  empty: 20, eventday: '', month: "June" }, {id: 23,  empty: 21, eventday: '', month: "June" }, {id: 24,  empty: 22, eventday: '', month: "June" }, {id: 25,  empty: 23, eventday: '', month: "June" },
      {id: 26,  empty: 24, eventday: '', month: "June" }, {id: 27,  empty: 25, eventday: '', month: "June" }, {id: 28,  empty: 26, eventday: '', month: "June" }, {id: 29,  empty: 27, eventday: '', month: "June" }, {id: 30,  empty: 29, eventday: '', month: "June" },
      {id: 31,  empty: 30, eventday: '', month: "June" }, {id: 32,  empty: 1, eventday: '', month: "July" }, {id: 33,  empty: 2, eventday: '', month: "July" }, {id: 34,  empty: 3, eventday: '', month: "July" }, {id: 35,  empty: 4, eventday: '', month: "July" }
  ],
    blldate: '',
}

const reducer = (state = defaultDateState, action) => {
  switch (action.type) {
    case "ADD-DATE":
      return { ...state, blldate: state.blldate + action.payload }
    case "GET-DATE":
      return { ...state, blldate: state.blldate - action.payload }
    default:
      return state
  }
}
const store = createStore(reducer)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);