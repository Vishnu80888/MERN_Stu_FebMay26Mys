const signupForm = document.getElementById("signupForm");
const signupemail = document.getElementById("signupemail");
const signupPassword = document.getElementById("signupPassword");
const message = document.getElementById("message");

signupForm.addEventListener("submit",function(event){
    event.preventDefault();

    if(!emailInput){
        message.textContent = "Email is required";
        message.style.color = "red";
        signupemail.focus();
        return;
    }
});