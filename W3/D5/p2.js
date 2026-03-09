//
const box = document.getElementById("box");

const insiderbtn = document.getElementById("insidebtn");

box.addEventListener("click",function(event){
    console.log("event type",event.type);
    console.log("event target id ",event.target.id);
    console.log("event current target id",event.currentTarget.id);
});

insidebtn.addEventListener("click",function(event){
    console.log("event type",event.type);
    console.log("event target id ",event.target.id);
    console.log("event current target id",event.currentTarget.id);
});

