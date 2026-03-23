//Es module exports 


//named export for a shared constant
export const taxRate = 0.18;


//named export for a resuable function
export function calculateTatol(subTotal){
    return subTotal + subTotal * taxRate;
}


//Default export: for the maibn feature of the module........
export default function createInvoiceLable(invoiceNumber){
    return "Invoice : "+invoiceNumber;
}

