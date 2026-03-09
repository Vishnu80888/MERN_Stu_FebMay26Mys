//Keybord event: keydown
const input = document.getElementById("nameInput");
const disply = document.getElementById("display");

input.addEventListener("keydown",function(event){
    console.log("key pressed :",event.key);
});

input.addEventListener("keydown",function(event){
    console.log("key pressed :",event.key);
    disply.textContent = "last key text typed::"+event.key;
});