//Using the EventEmitter Class
const EventEmitter = require("events"); 
 
//create a new event emitter instance
//This object can publish events and allow listeners to subscribe

const orderEmitter = new EventEmitter();

//Register a listener for the "orderPlaces" event
//Whenever the event is emitted, the function will execute
//once() :- registers a lister that automaticallty reoves itself  after running for the first time.

orderEmitter.once("OrderPlaced",
    function(orderID,customerName,orderValue){
        console.log("HELLO,",customerName);
        console.log("Bill amount:",orderValue);
        console.log("Restaurant acceped order.",orderID);
    }
);

orderEmitter.on("OrderPlaced",
    function(orderID,customerName){
        console.log("HELLO,",customerName);
        console.log("Hello ,Vishnu Waiting for Restaurant for accept the order",orderID);
    }
);

orderEmitter.on("OrderPlaced",
    function(orderID,customerName){
        console.log("HELLO,",customerName);
        console.log("Assigning the delivery partner",orderID);
    }
);
orderEmitter.on("OrderPlaced",
    function(orderID,customerName){
        console.log("HELLO,",customerName);
        console.log("Ramesh is delivering your order.",orderID);
    }
);
//emit the event with extra data 
//The listenser recives the orderID Value.
orderEmitter.emit("OrderPlaced","ORD-2403001","Vishnu",10000);
orderEmitter.emit("OrderPlaced","ORD-2403001","Vishnu",10000);