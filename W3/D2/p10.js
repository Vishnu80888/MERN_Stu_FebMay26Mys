//Call Bcak function
// it is fuction which is passed as an argument to another function

function greetUser(name,callback){
    console.log("hello ," ,name);
    callback();
}
greetUser("Vishnu",function(){
    console.log("callback function executed");
});