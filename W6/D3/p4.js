// Reading and Writing of Files Asynchronously using fsPromise
const fs = require("fs/promises");
const path =  require("path");

async function runPromiseBasedFileFlow(){
    const filePath = path.join(__dirname,"promises-note.txt");

    try{
        await fs.writeFile(filePath,"Written using fs/Promises.This works with async/await");
        console.log("file wrtten using fs/Promises");
        const content = fs.readFileSync(filePath,"utf-8");
        console.log(content);
    }
    catch(error){
        console.log("Promise-based fs error: ",error.message);
    }
}
runPromiseBasedFileFlow();
