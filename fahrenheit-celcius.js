function fahrenhiteToCelcius(fahrenhit ){
    var fahrenhite =32;
    var getCelcius = (fahrenhit-32) * 5/9;
    return getCelcius;
}

var getWeatherCondition = fahrenhiteToCelcius(33);
console.log(getWeatherCondition);