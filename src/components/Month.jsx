import React from 'react';
import { getWeeksInMonth } from '../utils/date_calculations.js';
import Week from './Week.jsx';

function Month(props){
  const monthBox = {
    border: '1px solid black',
    padding: '5px',
    margin: '5px'
  }

  const monthNames = [
    'Jan', 'Feb', 'Mar', 'Apr', 'Maj', 'Jun', 'Jul', 'Avg', 'Sep', 'Okt', 'Nov', 'Dec'
  ]

  const month = props.month;
  const year = new Date().getFullYear();
  const date = new Date(year, month, 1);
  const weeksInMonth = getWeeksInMonth(date)
  const monthName = monthNames[month] + " " + (month + 1);

  return (
    <div style={monthBox}>
      <div className={'month-name'}>{monthName}</div>
      <div>
          <table>
            <thead>
              <tr>
                <th>P</th>
                <th>T</th>
                <th>S</th>
                <th>Č</th>
                <th>P</th>
                <th>S</th>
                <th>N</th>
              </tr>
            </thead>
            <tbody>
              {weeksInMonth.map((week, wi) =>
                <tr key={"m_" + wi}>
                  <Week vacations={props.vacations} month={month} week={week}></Week>
                </tr>
              )}
            </tbody>
          </table>
        </div>
    </div>
  )
}

export default Month;