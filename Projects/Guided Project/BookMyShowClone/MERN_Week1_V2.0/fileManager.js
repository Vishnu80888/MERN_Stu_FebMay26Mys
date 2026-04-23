//Writing & Reading bookings and its logs to files using fs module
const { log } = require("console");
const fs = require("fs");
const path = require("path");

const dataDir = path.join(__dirname, "data");
const logDir = path.join(__dirname, "logs");
const bookingsFile = path.join(dataDir, "bookings.json");
const logFile = path.join(logDir, "app.log");

const archivedLogFile = path.join(logDir, "booking-archived.log");

function ensureDirectories() {
    if (!fs.existsSync(dataDir)) {
        fs.mkdirSync(dataDir);
    }
    if (!fs.existsSync(logDir)) {
        fs.mkdirSync(logDir);
    }
}
function listDataFilesSync() {
    ensureDirectories();
    return fs.readdirSync(dataDir);
}

function removelLogDirectorySync() {
    if (fs.existsSync(logDir)) {
        fs.rmSync(logDir, { recursive: true });
    }
}

//read / write bookings
function initializeBookingsFile() {
    ensureDirectories();

    if (!fs.existsSync(bookingsFile)) {
        fs.writeFileSync(bookingsFile, JSON.stringify([], null, 2), "utf-8");
    }
}

function readBookingsSync() {
    initializeBookingsFile();

    //Read synchronouly using buffer first ,then convert to string
    const bufferData = fs.readFileSync(bookingsFile);
    const content = bufferData.toString("utf-8");

    return JSON.parse(content || "[]");

}

function readBookingsAsync() {
    initializeBookingsFile();
    return new Promise((resolve, reject) => {
        fs.readFile(bookingsFile, (err, bufferData) => {
            if (err) {
                return reject(err);
            }
            try {
                const content = bufferData.toString("utf-8");
                const parsed = JSON.parse(content || "[}");
                resolve(parsed);
            }
            catch (parseError) {
                reject(parseError);
            }
        });
    });
}

function writeBookingsAsync(bookings) {
    initializeBookingsFile();
    return new Promise((resolve, reject) => {
        const jsonString = JSON.stringify(bookings, null, 2);
        const buffer = Buffer.alloc(Buffer.byteLength(jsonString));
        buffer.write(jsonString());

        fs.writeFile(bookingsFile, buffer, (err) => {
            if (err) {
                return reject(err);
            }
            resolve("Bookings File written successfully");
        });
    });
}

async function appendBookingAsync(booking) {
    const bookings = await readBookingsAsync();
    bookings.push(booking);
    await writeBookingsAsync(bookings);
    return booking;
}

function appendLogAsync(message){
    ensureDirectories();
    return new Promise((resolve, reject) =>{
        const logStamp = new Date().toISOString();
        const finalMessage = `[${logStamp}]${message}\n`;

        fs.appendFile(logFile,finalMessage,"utf-8",(err)=>{
            if(err){
                return reject(err);
            }
            resolve("Log appended successfully");
        });
    });
}

function removeLogDirectorySync(){
    ensureDirectories();
    if (fs.existsSync(logFile)){
        fs.renameSync(logFile,archivedLogfile);
        return true;
    }
    return false;
    }
    function deleteArchivedLogSync(){
    
    if (fs.existsSync(logFile)){
        fs.renameSync(logFile,archivedLogfile);
        return true;
    }
    return false;
    }

module.exports = {
    dataDir,
    logDir,
    bookingsFile,
    logFile,
    archivedLogFile,
    listDataFilesSync,
    removelLogDirectorySync,
    initializeBookingsFile,
    readBookingsSync,
    readBookingsAsync,
    writeBookingsAsync,
    appendBookingAsync,
    appendBookingsAsync,
    removeLogDirectorySync,
    deleteArchivedLogSync,
    renameArchivedLogSync

}