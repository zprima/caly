export function getWeeksInMonth(date) {
  const year = date.getFullYear();
  const month = date.getMonth();

  var weeks = [],
    firstDate = new Date(year, month, 1),
    lastDate = new Date(year, month + 1, 0),
    numDays = lastDate.getDate(),
    days = [];

  var start = 1;
  var end = 7 - firstDate.getUTCDay();
  let i = 0;

  while (start <= numDays) {
    days = []
    for (i = start; i <= end; i++) {
      days.push(new Date(year, month, i))
    }

    weeks.push({ start: start, end: end, days: days });

    start = end + 1;
    end = end + 7;
    if (end > numDays)
      end = numDays;
  }

  //pre-fill days
  var week = weeks[0]
  var missingDays = 8 - week.days.length
  if (missingDays > 0) {
    var firstDay = week.days[0];
    for (i = 1; i < missingDays; i++) {
      var prevDay = subDays(firstDay, i)
      week.days.unshift(prevDay)
    }
  }

  return weeks;
}

export function findDateInArray(date, ar) {
  return ar.find((item) => {
    if (item.getTime() === date.getTime()) {
      return true
    } else {
      return false
    }
  })
}

export function isWeekend(date) {
  if (date.getDay() === 6 || date.getDay() === 0) {
    return true
  } else {
    return false
  }
}

export function isInPast(date) {
  const currentDate = new Date();
  if (date < currentDate) {
    return true
  } else {
    return false
  }
}

// function isMonday(date) {
//   if (date.getDay() == 1) {
//     return true
//   } else {
//     return false
//   }
// }

// function addDays(date, days) {
//   var result = new Date(date);
//   result.setDate(result.getDate() + days);
//   return result;
// }

function subDays(date, days) {
  var result = new Date(date);
  result.setDate(result.getDate() - days);
  return result;
}