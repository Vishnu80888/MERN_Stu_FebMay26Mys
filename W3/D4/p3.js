//Array map
let numbers = [1,2,3,4];
let squared = numbers.map(num => num * num);
console.log(squared);

let prices = [200,300,400,500];
let priceWithGST = prices.map(price => price + price * 0.18);
console.log("price without gst=",prices);
console.log("price with gst=",priceWithGST);

//using map to extract files in a object
let users = [
    {name:"Vishnu",age:24},
    {name:"kirshna",age:22}
];
console.log(users);

let names = users.map(user => user.name);
console.log(" ",names);