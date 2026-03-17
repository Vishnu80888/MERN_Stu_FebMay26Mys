const payrollRecords = [
  { name: "Asha", basePay: 30000, bonus: 2000, taxRate: 0.1 },
  { name: "Vikram", basePay: 45000, bonus: 5000, taxRate: 0.15 },
  { name: "Invalid_Base", basePay: -500, bonus: 100, taxRate: 0.1 },
  { name: "Invalid_Tax", basePay: 20000, bonus: 0, taxRate: 1.2 },
  { name: "Rahul", basePay: 35000, bonus: 0, taxRate: 0.12 }
];

const validRecords = payrollRecords.filter(emp => 
  emp.basePay > 0 && 
  emp.bonus >= 0 && 
  emp.taxRate >= 0 && 
  emp.taxRate <= 1
);

// netPayReport
const netPayReport = validRecords.map(emp => {
  const gross = emp.basePay + emp.bonus;
  const netPay = gross - (gross * emp.taxRate);
  
  return {
    name: emp.name,
    netPay: netPay
  };
});

//  totalNetPayout using reduce
const totalNetPayout = netPayReport.reduce((sum, emp) => sum + emp.netPay, 0);


console.log("--- Valid Records ---");
console.table(validRecords);

console.log("--- Net Pay Report ---");
console.table(netPayReport);

console.log(`Total Net Payout: $${totalNetPayout.toLocaleString()}`);