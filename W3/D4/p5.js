//Reduse function
// let nums = [5,10,15];
// let total = nums.reduce((previous,current) => previous+current)/nums.length;
// console.log(total);


//reduse to object count by category
let items = ["pen","pencil","pen","eraser"]
let count = items.reduce((current,next) =>{
     current[next] = (current[next] || 0) +1;
return current;
},{});
console.log(" count items",count);
