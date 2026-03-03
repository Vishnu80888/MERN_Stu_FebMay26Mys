 console.log("Condition Statements");

let age = 25;
if(age < 13){
    console.log("child");
} else if(age<18){
    console.log("teenage");
} else{
    console.log("Adults");
}
//switch statements

console.log("conditional statements");

const day = "Monday";
switch (day){
    case "Monday":
    console.log("Start of the week");
    break;

    case "Wednesday":
    console.log("Mid of the week");
    break;

    case "Friday":
    console.log("End  of the work week");
    break;

    default:
        console.log("Some day in the week");
        break;
}

//type conversion
let  n = Number("123")
console.log("Type of n:",typeof n);

let  m = Number("ABC")
console.log("m: ",m,"Type of m:",typeof m);
