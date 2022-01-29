var student1 = { id: 23, name: "Razesh", address: "Madaripur", mobile: 0191}
var mobile = {
    id: 22,
    name: "Samsang",
    ram:"25gb",
    rom:"50gb",
    price: 20000
}

// console.log('Mobile ID: ', mobile.id);
// console.log('Mobile ID: ', mobile.name);
mobile.price = 30000;
// console.log(mobile);
// mobile.ram = "100gb";
// var mobileRam = mobile.ram;
// console.log(mobileRam);
// mobile["price"] = 55000;
// console.log(mobile.price);
var priceProperty = "price";
mobile[priceProperty] = 60000;
var ramProperty = "ram";
mobile[ramProperty] = "200gb";
console.log(mobile);