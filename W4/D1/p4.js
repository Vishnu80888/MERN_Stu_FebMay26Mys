//logging

console.log("Console logging");

console.warn("Warning Message to print");

console.error("Error message to print");

let user = [
    {id:1,name:"vishnu"},
    {id:2,name:"varun"}
]

console.table(user);//table making

//Group related logs

console.group("Grouped logs");
console.log("Log 1");
console.log("Log 2");
console.log("Log 3");
console.log("Log 4");
console.groupEnd();

//measure execution time
console.time("LoopTimer")
for(let i=0;i<1000;i++){}
console.timeEnd("LoopTimer");
