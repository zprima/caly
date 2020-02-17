import React from 'react';
import Day from './Day.jsx'

function Week(props){

  return (
    <React.Fragment>
      {
        props.week.days.map((date, di) => {
          return <td key={di}>
            <Day vacations={props.vacations} month={props.month} date={date}></Day>
          </td>
        })
      }
    </React.Fragment>
  )
}

export default Week;