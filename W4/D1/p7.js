// //getelementby id
// console.log("Document Object:",document);
// console.log("Page title:",document.title);

// const heading = document.getElementById("mainheading");
// console.log("Heading Text",heading.textContent);


//getelementbyclassname

const info = document.getElementsByClassName("info");
const run = document.getElementById("run");

run.addEventListener("click", function () {
    for (let i = 0; i < info.length; i++) {
        console.log(info[i].textContent);
        info[i].style.color = "blue";
    }
});

//span tag
const spanTag = document.getElementsByTagName("span");

run.addEventListener("click", function () {
    for (let i = 0; i < info.length; i++) {
        console.log(info[i].textContent);
        info[i].style.color = "blue";
    }
    for (let i = 0; i < spanTag.length; i++) {
        spanTag[i].style.backgroundColor = "green";
    }


});

//Query Selector: Returns the first element  matching a css selector(only first one will be work on that )

const mainFirstheading = document.querySelector(".mainheading");//prefixing time use . for class and # for id
mainFirstheading.style.color = "red";

//Query Selector ALL::: returns all elements matching the selector

const tasks = document.querySelectorAll(".task");
task.forEach(function(task){
    task.style.color = "purple";
})

