//timeStamp and Advanced queries
const mongoose = require('mongoose');

async function main() {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/datedb");
        console.log("Connected to MongoDB");

        const schema = new mongoose.Schema({
            name: String
        },
            {
                timestamps: true
            });
        const Model = mongoose.model('LogTime', schema);
        // await Model.deleteMany();
        //     await Model.create([
        //         { name: "Amogh" },
        //         { name: "Suman" },
        //         { name: "varshan" }
        //     ]);

        const recent = await Model.find({
            createdAt: {
                $gt: new Date(Date.now() - 3000000)
            }
        }).sort({ createdAt: -1 });
        console.log("Recent:", recent);
    }
    catch (err) {
        console.log("Error:", err.message);
    } finally {
        await mongoose.disconnect();
        console.log("DB disconnected");
    }
}
main();