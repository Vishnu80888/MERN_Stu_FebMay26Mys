//Accessing Form Elements
const studentForm = document.getElementById("studentForm");
const nameInput = document.getElementById("nameInput");
const emailInput = document.getElementById("emailInput");
const Inspectbtn = document.getElementById("Inspectbtn");
const terms = document.getElementById("terms");
const Country = document.getElementById("Country");


Inspectbtn.addEventListener("click",function(){
    console.log("Form: ",studentForm);
    console.log("Name: ",nameInput.value);
    console.log("Email: ",emailInput.value);
    
    const selectedGender = document.querySelector('input[name="gender]:checked');
    console.log("Gender :",selectedGender?selectedGender.value:"Not Selected");

    console.log("Accepted trems: ",terms.checked);
    console.log("Country: ",Country.value);
});