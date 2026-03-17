const rules = [
  { role: "admin", action: "READ", allowed: true },
  { role: "admin", action: "WRITE", allowed: true },
  { role: "student", action: "READ", allowed: true },
  { role: "student", action: "WRITE", allowed: false },
  { role: "guest", action: "READ", allowed: false }
];

// Filter
const allowedRules = rules.filter(rule => rule.allowed);

//  Map
const allowedPairs = allowedRules.map(rule => `${rule.role}:${rule.action}`);

// Reduce
const summary = allowedRules.reduce((acc, rule) => {
  acc[rule.role] = (acc[rule.role] || 0) + 1;
  return acc;
}, { admin: 0, student: 0, guest: 0 }); // Initialized with 0s per requirements



console.log("Allowed Rules:", allowedRules);
console.log("Allowed Pairs:", allowedPairs);
console.log("Summary:", summary);