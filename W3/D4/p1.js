//Array basics
console.log("Array basics");

//creating an array
let emptyArray = [];
let numArray = [1,2,3,4];
let mixedArray = [42,"helo",true,null,{name:"gola"},[5,6]];
console.log(emptyArray);
console.log(numArray);
console.log(mixedArray);

//Using Constructor
let fruits = new Array("Apple","Mango");
console.log(fruits);
console.log("Is fruits an array?",Array.isArray(fruits));

//Push --- adding
fruits.push("cherry");
console.log(fruits);

//pop -- delete
fruits.pop();
console.log(fruits);

//unshift :adds to beginng
fruits.unshift("orange");
console.log(fruits);

//shif : remove from beginning
fruits.shift();
console.log(fruits);

