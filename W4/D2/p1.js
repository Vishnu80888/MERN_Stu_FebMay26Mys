//innnerText HTML and text content
//innerText:visible renered text only
//textContent: all text nodes regardless of CSS
//innerHTML :that allows reading and writing markup inside an element

const message = document.getElementById("message");
const restbtn = document.getElementById("restbtn");

//type 2 approches for calling and without "const"
document.getElementById("innertextbtn").addEventListener(
    "click", function () {
        message.innerText = "Updated using InnerText";
    });

document.getElementById("textcontentbtn").addEventListener(
    "click", function () {
        message.textContent = "Updated using textcontentbtn";
    });

document.getElementById("resetbtn").onclick = function () {
    document.getElementById("message").innerText = "Original Message";
};

//inner HTML
const box = document.getElementById("box");

document.getElementById("innerhtmlbtn").addEventListener(
    "click", function () {
        box.innerHTML = "<strong>Orginal</strong> Content";
    });



