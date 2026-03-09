const hoverbox = document.getElementById("hoverbox");

hoverbox.addEventListener("mouseover",function(){
    hoverbox.textContent ="hellooooo the mouse is hover me ";
    hoverbox.style.backgroundColor = "blue";
});

hoverbox.addEventListener("mouseout",function(){
    hoverbox.textContent ="hover me ";
    hoverbox.style.backgroundColor = "yellow";
});