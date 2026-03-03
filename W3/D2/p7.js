//Arrow Function syntax
(args) => {
    //body of the function
}
//Add two numbers
const Sum = (a,b) => {
    return a+b;
}
console.log("3+5= " ,Sum(3,5));

//single line return / implicit return
const Square = x => x*x;
console.log("Square of 44 : ",Square(44)); 


const sayHello = () => console.log("Hello from arrow function");
sayHello();