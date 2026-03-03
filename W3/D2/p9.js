//Immediately invoke fuction expression {IIFE}

//without parameters
(function() {
    console.log("Basic IIFE executed Immediately")
})();
//with parameters
(function(appName,version) {
    console.log("appname=",appName,"version=",version);
})("Nodejs","v22.20.0");

//with return value
const result = (function(){
    const a = 10;
    const b = 20;
    return sum = a+b;
})();
console.log("sum is==",result);