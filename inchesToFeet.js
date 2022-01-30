function milesToKelometer(miles){
    var km = miles * 1.60934;
    var km = km.toFixed(2);
    return km;
}

var faridpurToMadaripur = 25;
var faridPurToMadaripurKm = milesToKelometer(faridpurToMadaripur);
console.log(' Faridpur to madaripur durotto : ' ,faridPurToMadaripurKm, 'Km');
// function inchesToFeet(inches){
//     var feet = inches /12;
//     var feet = feet.toFixed(2);
//     return feet;
// }

// var brotherInches = 132;
// var brotherHeight = inchesToFeet(brotherInches);
// console.log('brother height is :', brotherHeight, 'Feet');

// var sisterInches = 142;
// var sisterHeight = inchesToFeet(sisterInches);
// console.log(' sister height is : ', sisterHeight, 'feet');

//==============miles to KM=================


// function inchesToFeet(inches){
//     let feet = inches /12;
//     return feet;
// }

// var dadiInches = 144;
// var dadiFeet = inchesToFeet(dadiInches);
// console.log('dadir ucchatta', dadiFeet);

// var dadaInches = 132;
// var dadaHeight = inchesToFeet(dadaInches);
// console.log('height of dada :' , dadaHeight , 'feet');
