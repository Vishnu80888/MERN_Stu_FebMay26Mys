// Directory[folder] operation : mkdir , readdir ,rmdir/rm
const fs = require("fs");
const path  = require("path");

const demodir = path.join(__dirname,"demo-folder.txt");

//creating a folder
fs.mkdirSync(demodir,{recursive:true});


fs.writeFileSync(path.join(demodir,"File1.txt"),"File1 content");
fs.writeFileSync(path.join(demodir,"File2.txt"),"File2 content");

// to check folder contents to list
const entries = fs.readdirSync(demodir);
console.log("Directory contents; ",entries);

fs.rmSync(demodir,{recursive:true,force:true});
console.log("dir exists?",fs.existsSync(demodir));