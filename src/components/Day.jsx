import React from 'react';
import { isWeekend, isInPast, findDateInArray} from '../utils/date_calculations.js';
import { holidates } from '../constants/holidays.js';

function Day(props){

  const month = props.month;
  const date = props.date;

  const holidays = holidates.map((item) => {
    return new Date(date.getFullYear(), item.month, item.day)
  });

  const paintDay = () => {
    if(month !== date.getMonth()){
      return '';
    }

    let cName = '';
    if(isWeekend(date)){
      cName = 'weekend';
    } else if(isInPast(date)){
      cName = 'past';
    }

    if(findDateInArray(date, holidays)){
      cName = 'holiday';
    } 
    else if(findDateInArray(date, props.vacations)){
      cName = 'vacation';
    }

  return <div className={'day ' + cName}>{date.getDate()}</div>
  }

  return (
    <div className="text-center">{paintDay()}</div>
  )
}

export default Day;