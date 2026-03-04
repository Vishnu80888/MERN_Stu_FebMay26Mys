//Basic of Objects

const person = {
    name:"Vishnu",age:23 ,isStudent:false
};
console.log("person= ",person);

console.log("name= ",person.name);//dot notation

console.log("age= ",person["age"]);//bracket notation

//adding new property to a object

person.city = "Mysore";
console.log("person",person);

//modify
person.age = 32;
console.log("person",person);

//delete
delete person.isStudent;
console.log("person",person);

//Object Constructor
const car = new Object();
car.make = "Audi";
car.model = "A4";
car.year = 2026;

console.log("car: ",car);
