type DayIndex = 0|1|2|3|4|5|6;

function isDayIndex(idx: number): idx is DayIndex {
  return (Number.isInteger(idx) && idx >= 0 && idx <= 6)
}

function assertIsDayIndex(idx: number): asserts idx is DayIndex {
  if (!isDayIndex(idx)) {
    throw new Error("Not a day index");
  } 
}



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
assertIsDayIndex(randomDay);

console.log(dayName(randomDay));


// no exception was thrown, therefore randomDay is a DayIndex

if (isDayIndex(randomDay)) {
  console.log(dayName(randomDay));
}

