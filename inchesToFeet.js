function inchesToFeet(inches){
    let feet = inches /12;
    return feet;
}

var dadiInches = 144;
var dadiFeet = inchesToFeet(dadiInches);
console.log('dadir ucchatta', dadiFeet);

var dadaInches = 132;
var dadaHeight = inchesToFeet(dadaInches);
console.log('height of dada :' , dadaHeight , 'feet');
