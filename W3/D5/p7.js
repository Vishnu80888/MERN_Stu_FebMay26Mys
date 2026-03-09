//event bubbling and stop propogation
const outer = document.getElementById("outer");
const inner = document.getElementById("inner");
const innerbtn = document.getElementById("innerbtn");

outer.addEventListener("click",function(){
    console.log("Outer div clicked")
});
inner.addEventListener("click",function(){
    console.log("inner div clicked")
});

innerbtn.addEventListener("click",function(event){
    console.log("Inner button clicked");
    event.stopPropogation();
    console.log("propogation stopped at button");
});