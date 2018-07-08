import './js_for_kids.scss'

var drawCats = function (howManyTimes) {
    for (var i = 0; i < howManyTimes; i++) ;
    console.log(i + ' =^.^=');
};
drawCats(5);

let secondsInAMinute = 60;
let minutesInAnHour = 60;
let secondsInAnHour = secondsInAMinute * minutesInAnHour;
console.log(secondsInAnHour);

let hoursInADay =24;
let secondsInADay = secondsInAnHour * hoursInADay;
console.log(secondsInADay);

let daysInAYear = 365;
let secondsInAYear = secondsInADay * daysInAYear;
console.log(secondsInAYear);

let age = 22;
let secondsInAnAge = age* secondsInAYear;
console.log(secondsInAnAge);
