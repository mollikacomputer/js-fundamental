var items = ["Tomato", "Vagitable", "Potato"];

var newItemKola = items.push("Kola");
var newItemSim = items.push("Sim");
var newItemsBichiKola = items.push("Bichi kola");
var totalItem = items.length;
// console.log(items.length);
// console.log(items);

if( totalItem < 5){
    console.log(" There are not enough items.")
}else if(totalItem ==5){
    console.log("there are 5 items")
}else if(totalItem ==6){
    console.log(items)
}else{
    console.log("items kathal nai")
}