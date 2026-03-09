//Event delegation
const tasklist = document.getElementById("tasklist");
const addTask = document.getElementById("addTask");
let taskCount = 3;
tasklist.addEventListener("click",function(event){
    if(event.target.ClassList.contains("deletebtn")){
        console.log("Delete button clicked for: ",event.target.parentElement.textContent.trim());
        event.target.parentElement.remove();
    }
});
addTask.addEventListener("click",function(){
    taskcount++;
    const li = document.createElement("li");
    li.innerHTML = "Task" + taskcount + '<button class="deletebtn">Delete</button>';
    tasklist.appendChild(li);
    console.log("New task is created");
});