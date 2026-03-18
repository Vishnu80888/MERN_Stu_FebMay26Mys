//handling errors  with try/catch
function loadCustomerProfile(){
    return new Promise(function(resolve,reject){
        const isServiceAvailable = false;

        if(isServiceAvailable){
            resolve("Success! Customer profile laaded");
        }else{
            reject("Unsuccessfull!! Customer profile Unavailable..");
        }
    });
}

async function showCustomerProfile(){
    try{
        const message = await loadCustomerProfile();
        console.log(message);
    }catch (error) {
   console.error("Error:", error);
}
}
showCustomerProfile();
