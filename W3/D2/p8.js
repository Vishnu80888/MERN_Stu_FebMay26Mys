//default parameters
function product (a=2,b=7){
    return a*b;
}
console.log("product of  15 and 4",product(15,4));
console.log("product of  15 ",product(15));
console.log("product of   ",product());

//Rest parameters
function sumOfAll(...numbers){
    console.log(...numbers);
}
sumOfAll(2,3);
sumOfAll(10);