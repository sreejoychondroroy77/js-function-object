function leapYear(year) {
    var sum = year % 4;
    var leap = sum == 0;
    return leap;
}
var check = leapYear(2023);
console.log(check)