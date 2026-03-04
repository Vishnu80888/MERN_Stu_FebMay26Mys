// JSON Stringify and Parse
const employee = {
    id : 102,
    name:"Sandeep",
    dept : "ME",
    isActive : true,
};
const jsonString = JSON.stringify(employee);
console.log(jsonString)

//parseing
const parsedObject = JSON.parse(jsonString);
console.log(parsedObject);