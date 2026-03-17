//Introduction to Promises
console.log("Program started");
function getWelcomeMessage(){
    return new Promise(function(resolve){
        setTimeout(()=>{
            resolve("Welcome to Promises");
    },10000);
    })
}
const messagePromises = getWelcomeMessage();

console.log("Promise created. Result not ready yet.");

messagePromises.then(function(message){
    console.log(message);
});

console.log("Program continues while the promise is pending..");