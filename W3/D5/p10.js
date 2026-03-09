const Clickbtn = document.getElementById("Clickbtn");
const runClick = document.getElementById("runClick");
const runMouseover = document.getElementById("runMouseover");
const runkeydown = document.getElementById("runkeydown");
const runDuplicate = document.getElementById("runDuplicate");
const demoInput = document.getElementById("demoInput");
const hoverBox = document.getElementById("hoverBox");

Clickbtn.addEventListener("click",function(e){
    console.log("e type",e.type);
    console.log("instance mouse event", e instanceof MouseEvent);
});

demoInput.addEventListener("keydown",function(e){
    if(e.key === "Enter"){
        console.log("Enter key Down");
    }
});

runClick.addEventListener("click",function(){
    Clickbtn.click();
});

runMouseover.addEventListener("click",function(){
    hoverBox.dispatchEvent(new MouseEvent("mouseover"));
    console.log("Dispatching mouseEvent");
});

hoverBox.addEventListener("mouseover",function(){
    console.log("programmatically triggered");
});

runkeydown.addEventListener("click",function(){
    demoInput.dispatchEvent(new KeyboardEvent("keydown",{
        key:"Enter"
    }));
});

runDuplicate.addEventListener("click", function() {
  const temp = document.createElement("button");
  temp.textContent = "hello"; 
  document.body.appendChild(temp);
});
