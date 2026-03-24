//setImmediate vs setTimeout

console.log("Scheduling setTimeout and setImmediate");

//callback timer
setTimeout(() => {
    console.log("Timer callback from setTimeout");
},0);

//setImmediate Callback
setImmediate(function(){
    console.log("setImmediate callback executed.");
});

console.log("Both callbacks are now waitimg for the event loop");