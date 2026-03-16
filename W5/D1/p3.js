console.log("Node JS Architecture demo");
console.log("1.scripte started");

//set Time OUT{it used for the make delay time get the output}

setTimeout(() => {
    console.log("3.Timer callback finished after waiting");
},1000);
console.log("2.Scripte continued without waiting for timer callback");
