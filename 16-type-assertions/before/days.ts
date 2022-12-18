type DayIndex = 0|1|2|3|4|5|6;

function dayName(dayIndex: DayIndex) {
    return [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ][dayIndex];
}

const randomDay = Math.floor(Math.random() * 7);
console.log(dayName(randomDay));
