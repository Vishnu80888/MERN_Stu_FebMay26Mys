// //throw  costom errors

// function divide(a,b){
//     if(b==0){
//         throw new Error("cannot divide by zero");        
//     }
//     return a/b;
// }
// try{
//     // console.log(divide(10,2));
//     console.log(divide(10,0));
// }
// catch(err){
//     console.log("caught:",err.message);
// }

// function age(ageno){
//     if(ageno<=18){
//         throw new Error("Age must be 18 and above");        
//     }
//     console.log("age is ok now u can vote");
//     return ageno;
// }
// try{
//     // console.log(divide(10,2));
//     console.log(age(28));
// }
// catch(err){
//     console.log("caught:",err.message);
// }

//create costom error class
class ValidationError extends Error{
    constructor(message){
        super(message);
        this.name = "ValidationError";
    }
}
function CreateUser (name){
    if(!name){
        throw new ValidationError("Name is required");
    }
    console.log("hi,"+name+"Welcome");
    return{name};
}
try{
    console.log(CreateUser("Vishnu"));
}
catch(err){
    console.log("caught:",err.message);
}
