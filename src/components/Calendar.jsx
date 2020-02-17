import React, {useState} from 'react';
import Month from './Month.jsx';

function Calendar(_props) {
  const [vacations, setVacations] = useState([]);
  const [vacationsCount, setVacationsCount] = useState(0);

  const fetchVacations = () => {
    const tx = document.getElementById("tx-vacations");
    const value = tx.value;

    const dates = value.split(',').map(x => {
      const year = new Date().getFullYear();
      const [day, month] = x.split('.');
      return new Date(year, month - 1, day);
    })

    setVacations(dates);
    setVacationsCount(dates.length);
  }

  const months = [];
  for(let i=0; i<12; i++){
    months.push(<Month key={"m_" + i} vacations={vacations} month={i}></Month>)
  }

  return (
    <div>
      <div className={"flex-container"}>
        {months}
      </div>
      <br></br>
      <div className={"flex-container"} style={{'flexDirection': 'column', 'alignItems': 'center'}}>
        <textarea id="tx-vacations" rows="3" defaultValue="28.4, 29.4, 30.4, 21.12, 22.12, 23.12, 24.12, 22.6, 23.6, 24.6, 26.6, 31.8, 1.9, 2.9, 3.9, 4.9"></textarea>
        <button onClick={() => fetchVacations()}>Apply</button>
        <div>You have entered: {vacationsCount} vacations</div>
      </div>
    </div>
  )
}

export default Calendar;