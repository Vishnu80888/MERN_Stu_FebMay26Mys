// Loops :For

console.log("For loops with example");
//forward loop with increment
for(let i=1;i<=5;i++){
    console.log("i: ",i);
}
//backward loop with decrecment
for(let i=5;i>0;i--){
    console.log("i: ",i);
}

for(let i=1;i<=3;i++){
    for(let j=1;j<=2;j++){
        console.log(`i= ${i},j= ${j}`)
    }
}