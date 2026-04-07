//
const fs = require("fs");
const path = require("path");

const dataDir = path.join(__dirname,"data");
const logDir = path.join(__dirname,"logs");
const bookingsFile = path.join(dataDir,"bookings.json");
const logFile = path.join(logDir,"app.log");

const archivedLogFile = path.join(logDir,"booking-archived.log");

function ensureDirectories(){
    if(!fs.existsSync(dataDir)){
        fs.mkdirSync(dataDir);
    }
}