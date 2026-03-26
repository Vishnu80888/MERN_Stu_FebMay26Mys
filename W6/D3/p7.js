//Introduction to buffers in Nodejs
//buffer stores raw bytes
//Here we Create buffer directly from a string
const textBuffer = Buffer.from("B");

//The value in the buffer is the encod from of the text
console.log("Buffer object: ",textBuffer);
console.log("Buffer length:",textBuffer.length);
console.log("Byte at index 0 : ",textBuffer[0]);
console.log("Byte at index 0 : ",textBuffer[1]);


//Each Character is stored in byte data 
//For standard ASCII letters there will be a equivalent code
//Buffer stores numeric value between 0 to 255