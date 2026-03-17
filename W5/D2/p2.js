//basic callback variation
//1. a callback with no input data
// 2. a callback that receives data from main function

function runTask(callback){
    console.log("task is running.");
    callback();
}
function runTaskWithResult(taskName,callback){
    console.log("Processing task:",taskName);
    callback("Task "+taskName+"finished successfully.");
}
function showSimpleDoneMessage(){
    console.log("Simple callback executed.");
}
function showDetailMessage(){
    console.log("Message");
}
// runTask(showSimpleDoneMessage);
runTaskWithResult("Send monthly report",runTaskWithResult);
