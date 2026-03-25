// Renaming , deleting and checking the file existance 
const fs = require("fs");
const path  = require("path");

const orginalPath = path.join(__dirname,"draft-report.txt");
const renamedPath = path.join(__dirname,"final-report.txt");

fs.writeFileSync(orginalPath,"Draft report content");
console.log("does draft-report.txt exists?",fs.existsSync(orginalPath));

//Renaming the file 
fs.renameSync(orginalPath,renamedPath);
console.log("does draft-report.txt exists?",fs.existsSync(orginalPath));

//deleting the file
fs.unlinkSync(renamedPath);
console.log("does final-report.txt exists?",fs.existsSync(renamedPath));