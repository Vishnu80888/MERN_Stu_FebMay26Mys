//Allocating buffers

const emptyBuffer = Buffer.alloc(8);
console.log("Contents of emptyBuffer:",emptyBuffer);
console.log("Allocated buffer bytes:",[...emptyBuffer]);

const textBuffer = Buffer.from([65,66,67]);
console.log("Buffer from byte array :",textBuffer);

// Buffer.Write() write text into the buffer
const buffer = Buffer.alloc(20);
const bytesWritten = buffer.write("HelloWorld");
console.log("Bytes Written:",bytesWritten);

//SubArray 
const firstSlice = buffer.subarray(2,8);
console.log("First slice as bytes:",[...firstSlice]);

//decode the bytes into text using the "tostring()"
console.log("Decode first slice:",...firstSlice.toString("utf-8"));
