export { };
//TALLEST MOUNTAIN
interface Mountain {
  name: string,
  height: number;
}

let mountains: Mountain[] = [
  { name: "Kilimanjaro", height: 19341 },
  { name: "Everest", height: 29029 },
  { name: "Denali", height: 20310 }
];
//lol probably an easier way to do this. 
function findNameOfTallestMountain(mtnArray: Mountain[]): string{
  let tallHeight: number = Math.max.apply(Math, mtnArray.map(function (o) { return o.height }))
  let tallestMtn: string
  for (let i: number = 0; i < mtnArray.length; i++){
    if (mtnArray[i].height === tallHeight) {
      tallestMtn = mtnArray[i].name;
      break;
    }
  }
  return tallestMtn;
}
//saving as string to be console log.
let tallResult: string = findNameOfTallestMountain(mountains);
console.log(tallResult);

//PRODUCTS
interface Product{
  name: string,
  price: number;
}

let products: Product[] = [
  { name: "Redbull", price: 2.50 },
  { name: "Zucchini", price: 1.00 },
  { name: "Apples", price: 1.00 },
  { name: "iPad", price: 400 }
];

function calcAverageProductPrice(products: Product[]): number{
  let total: number = 0;
  let average: number;
  for (let i: number = 0; i < products.length; i++){
    total += products[i].price;
  }
  average = total / products.length;
  return average;
}

let averages: number = calcAverageProductPrice(products);
console.log(averages);

//INVENTORY
interface InventoryItem{
  product: Product,
  quantity: number;
}
let motor: Product = { name: "motor", price: 10.00 };
let sensor: Product = { name: "sensor", price: 12.50 };
let LED: Product = { name: "LED", price: 1.00 };
let inventory: InventoryItem[] = [
  { product: motor, quantity: 10},
  { product: sensor, quantity: 4},
  { product: LED, quantity: 20}
];

function calcInventoryValue(items: InventoryItem[]): number{
  let total: number = 0;
  for (let i: number = 0; i < items.length; i++){
    total += (items[i].quantity * items[i].product.price);
  }
  return total;
}
let totalValue: number = calcInventoryValue(inventory);
console.log(totalValue);