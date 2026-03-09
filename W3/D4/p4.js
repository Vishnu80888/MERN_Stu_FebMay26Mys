//Filter method
// let marks = [75,49,56,70,89];
// let passed = marks.filter(pass => pass >= 70);

// console.log("marks: " ,marks);
// console.log("pass: " ,passed);

let students = [ 
  {name:"Vishnu", marks:84}, 
  {name:"kirshna", marks:90}, 
  {name:"Raju", marks:15}, 
  {name:"Ram", marks:70} 
];
let passed = students.filter(student => student.marks >= 70).map(student => student.name);//using map and filter in single line
console.log("Passed Students:", passed);
let failed = students.filter(student => student.marks < 70);
console.log("failed Students:", failed);

// let names = passed.map(user => user.name);
// console.log("names: ",names);

// let namess = failed.map(user => user.name);
// console.log("names: ",namess);

