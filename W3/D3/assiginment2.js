function invoice(gstRate = 0.18, ...items) {
  let subtotal = 0;

  for (let i = 0; i < items.length; i++) {
    const item = items[i];

    //Stop processing
    if (item.name === "STOP") {
      break;
    }

    //  Data 
    const isInvalid = 
      !item.price || 
      !item.qty || 
      item.price <= 0 || 
      item.qty <= 0;

    if (isInvalid) {
      continue;
    }

    //Accumulate subtotal
    subtotal += item.price * item.qty;
  }

  // final figures
  const gst = subtotal * gstRate;
  const total = subtotal + gst;

  return {
    subtotal: Number(subtotal.toFixed(2)),
    gst: Number(gst.toFixed(2)),
    total: Number(total.toFixed(2))
  };
}
const result = invoice(
  0.10, // 10% GST
  { name: "Notebook", price: 50, qty: 2 },
  { name: "Broken Pen", price: -5, qty: 1 }, 
  { name: "STOP", price: 0, qty: 0 },
  { name: "Eraser", price: 10, qty: 5 }     
);

console.log(result); 