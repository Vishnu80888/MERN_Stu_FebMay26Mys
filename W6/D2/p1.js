//Understanding the Event loop
console.log("1.Synchronous task started");

//setTimer schdules a callback for later.
setTimeout(()=>{
    console.log("3.Timer callback executed.");
},1000);

console.log("2.Synchronous task finished.");