//Import ES modules [accessing the p5.mjs]
import createInvoiceLable,{calculateTatol,taxRate} from "./p5.mjs"

const subTotal = 4000;
const total = calculateTatol(subTotal);
const label = createInvoiceLable("INV-2026-001");

console.log("Invoice Label:",label);
console.log("Tax Rate :",taxRate);
console.log("Final total : ",total);