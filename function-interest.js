function getInterest(capital, rate, years){
    var profit = capital /100*rate*years + capital;
    return profit;
}

var fiveYearsProfitWithInterest = getInterest(5000, 5, 5);
console.log(fiveYearsProfitWithInterest);

