//Using a custom commonJS module 

const {calculateTax,applyDiscount,formatCurrency} = require("./p2");//calling another file ......


const itemName = "Laptop";
const basePrice = 60000;

const discountedPrice = applyDiscount (basePrice,10);
const taxAmount = calculateTax(discountedPrice);
const finalPrice = discountedPrice + taxAmount;

console.log("items: ",itemName);
console.log("Base Price :",formatCurrency(basePrice));
console.log("Discont:",formatCurrency(discountedPrice));
console.log("GST Tax : ", formatCurrency(taxAmount));
console.log("Final Prince : ",formatCurrency(finalPrice));