function getFactorial(num){
    var factorial = 1;
    for(var i = 1; i < num; i++){
        factorial = factorial*i;
    }
    return factorial;
}

var firstFactorial = getFactorial(8);
console.log(firstFactorial);
var secondFactorial = getFactorial(9);
console.log(secondFactorial);













//=======================
// function getFactorial(num){
//     var factorial = 1;
//     for(var i = 1; i <= num; i++){
//             factorial = factorial * i;
//     }
//     return factorial;
// }
// var firstFactorial = getFactorial(5);

// console.log(firstFactorial);
//========================
// function getFactorial(num){
//     var factorial= 1;
//     for(var i = 1; i<= num; i++ ){
//         factorial = factorial*i;
//     }
//     return factorial;
// }

// var firstFactorial = getFactorial(7);
// console.log(firstFactorial);
