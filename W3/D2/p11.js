//recursive fuction 
// a fucction which calls itself
const n = 10;
function factorial(n){
    if(n<=1){
        return 1;
    }
    return n*factorial(n-1);
}
