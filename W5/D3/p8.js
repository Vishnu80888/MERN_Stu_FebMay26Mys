//try catch finally with async / await
function processPayments(isSucceeded){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            if(isSucceeded){
                resolve("Payment processed Successfully");
            }else{
                reject("Payment couldn't processed successfully");
            }
        });
    });
}

async function runPaymentFlow(isSucceeded){
    try{
        const result = await processPayments(isSucceeded);
        console.log("Success:",result);
    }
    catch(error){
        console.log("Failure: ",error);
    }
    finally{
        console.log("Payment Flow is completed.....");
    }
}
runPaymentFlow(false).then(function(){
    return runPaymentFlow(true);
});