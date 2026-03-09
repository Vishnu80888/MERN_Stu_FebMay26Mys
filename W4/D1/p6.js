// //differnt variations in finally

// function Example(){
//     try{
//         console.log("Example in try block");
//         return "TRY_RETURN";
//     }
//     finally{
//         console.log("THis is printed!");
//     }
// }
// console.log("Example result",Example());


//return in catch block and still not finally

function example1() {
    try {
        try {
            throw new Error("New Error");

        }
        catch (e) {
            console.log("Example1: caught error");
            // return 10;
            throw (e);

        }
        finally {
            console.log("Example 1: finally still runs");
        }
    }
    catch (e) {
        console.log("Example 1 outer catch", e.message);
    }
}
console.log(example1());