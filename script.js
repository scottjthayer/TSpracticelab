"use strict";
exports.__esModule = true;
var mountains = [
    { name: "Kilimanjaro", height: 19341 },
    { name: "Everest", height: 29029 },
    { name: "Denali", height: 20310 }
];
//lol probably an easier way to do this. 
function findNameOfTallestMountain(mtnArray) {
    var tallHeight = Math.max.apply(Math, mtnArray.map(function (o) { return o.height; }));
    var tallestMtn;
    for (var i = 0; i < mtnArray.length; i++) {
        if (mtnArray[i].height === tallHeight) {
            tallestMtn = mtnArray[i].name;
            break;
        }
    }
    return tallestMtn;
}
//saving as string to be console log.
var tallResult = findNameOfTallestMountain(mountains);
console.log(tallResult);
var products = [
    { name: "Redbull", price: 2.50 },
    { name: "Zucchini", price: 1.00 },
    { name: "Apples", price: 1.00 },
    { name: "iPad", price: 400 }
];
function calcAverageProductPrice(products) {
    var total = 0;
    var average;
    for (var i = 0; i < products.length; i++) {
        total += products[i].price;
    }
    average = total / products.length;
    return average;
}
var averages = calcAverageProductPrice(products);
console.log(averages);
var motor = { name: "motor", price: 10.00 };
var sensor = { name: "sensor", price: 12.50 };
var LED = { name: "LED", price: 1.00 };
var inventory = [
    { product: motor, quantity: 10 },
    { product: sensor, quantity: 4 },
    { product: LED, quantity: 20 }
];
function calcInventoryValue(items) {
    var total = 0;
    for (var i = 0; i < items.length; i++) {
        total += (items[i].quantity * items[i].product.price);
    }
    return total;
}
var totalValue = calcInventoryValue(inventory);
console.log(totalValue);
