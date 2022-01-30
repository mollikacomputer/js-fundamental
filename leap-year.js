function isLeapYear(year){
    if(year %4 == 0){
        var leapYear = "This year is Leap Year";
        return leapYear;
    }
    else{

        var notLeapYear = "This year is not Leap Year";
        return notLeapYear;
    }
}
var myYear = 2088;

var isMyYearLeapYear = isLeapYear(myYear);
console.log(isMyYearLeapYear, myYear);














// function isLeapYear(year){
//     if(year % 4==0){
//         var LeapYear = "This Year is Leap Year :";
//         return LeapYear;
//     }
//     else{
//         var notLeapYear = "This year is not Leap Year";
//         return notLeapYear;
//     }
// }
// const myYear =2080;
// const isMyYearLeapYear = isLeapYear(myYear);
// console.log(isMyYearLeapYear );