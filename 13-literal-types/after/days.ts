function dayName(dayIndex: 0|1|2|3|4|5|6) {
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

const dayIndex = 3;
let myIndex = 4;

const r = dayName(myIndex);

// const r = dayName(9);
console.log(r.toLowerCase());

