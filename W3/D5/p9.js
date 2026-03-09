const oncebtn = document.getElementById("oncebtn");

//Limiting listerner to once only for a event
oncebtn.addEventListener("click",function(){
    console.log("This click listener works only once");
},{once:true});

//global keyboad shortcut creation 
document.addEventListener("keydown",function(event){
    if(event.ctrlKey && event.key.toLocaleLowerCase()==="s"){
        event.preventDefault();
        console.log("custom ctr+s shortcut triggered");
    }
})