// creating 5 tickets
let ticketQueue = [
  { id: "T101", priority: "MEDIUM", resolved: true },
  { id: "T102", priority: "LOW", resolved: true },
  { id: "T103", priority: "HIGH", resolved: false },
  { id: "T104", priority: "MEDIUM", resolved: true },
  { id: "T105", priority: "LOW", resolved: false }
];

//urgent ticket
ticketQueue.unshift({ id: "T000", priority: "HIGH", resolved: false });

//addding 2 tickets 
ticketQueue.push(
  { id: "T106", priority: "LOW", resolved: false },
  { id: "T107", priority: "MEDIUM", resolved: false }
);

//to process shift()
const currentTicket = ticketQueue.shift();

//  pop
const droppedTicket = ticketQueue.pop();
    
//pending tickets
const pending = ticketQueue.filter(ticket => ticket.resolved === false);

//map
const pendingIds = pending.map(ticket => ticket.id);

console.log("Current Ticket Being Processed:", currentTicket);
console.log("Dropped Ticket (Duplicate):", droppedTicket);
console.log("Pending Tickets (Unresolved):", pending);
console.log("Pending Ticket IDs:", pendingIds);