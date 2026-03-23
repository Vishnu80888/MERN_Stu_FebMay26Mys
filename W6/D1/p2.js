//CommonJS export and import 

function calculateTax(amount){
    return amount*0.18
}

function applyDiscount(amount,precent){
    return amount - precent * (precent/100);
}

function formatCurrency(amount){
    return "INR" + amount.toFixed(2);//by default it will be 6 digits
}

//module.exports make this functions avilable to requrire().....

module.exports = {calculateTax,applyDiscount,formatCurrency};
