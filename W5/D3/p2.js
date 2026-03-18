//Why  use async/await
function getUser(){
    return new Promise(function(resolve){
        setTimeout(function(){
            resolve({id:101,name:"Kiran"});
        },1000);
    });
}   

function getOrders(userId){
    return new Promise(function(resolve){
        setTimeout(function(){
            resolve(["order-A","order-B"]);
        },1500);
    });
}

async function ShowUserAndOrders(){
    const user = await getUser();
    console.log("User loaded :",user.name);
    const orders =  await getOrders(user.id);
    console.log("User orders :",orders);
}
ShowUserAndOrders();