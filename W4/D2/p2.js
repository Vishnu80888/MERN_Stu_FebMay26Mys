//creatElements() && appendChild()

const list = document.getElementById("list");
let counter = 1;

document.getElementById("addbtn").addEventListener("click",function(){
    list.textContent ="";
    const li = document.createElement("li");
    li.textContent = "Item " + counter++;
    list.appendChild(li);
});

document.getElementById("removebtn").addEventListener("click",function(){
    if(list.lastElementChild){
    list.removeChild(list.lastElementChild);
    }
    else{
        list.textContent ="no items to remove";
    }
});
