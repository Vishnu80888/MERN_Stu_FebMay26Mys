//basics of Embedding and referencing
const mongoose =  require("mongoose");

async function main(){
    try{
        await mongoose.connect("mongodb://127.0.0.1:27017/embrel");
        console.log("connected to Mongodb");

        const orderSchema = new mongoose.Schema({
            product:String,
            price:Number
        });

        const userSchema = new mongoose.Schema({
            name:String,
            orders:[orderSchema]  //embedded document
        });

        const User = mongoose.model('User',userSchema);

        const embeddedUser = await User.create({
            name:"Vishnu",
            orders:[
                {product:"Laptop",price:50000},
                {product:"Printer",price:15000},
                {product:"Projector",price:30000}
            ]
        });
        console.log("Users\n");
        // console.log(embeddedUser); this uded for the one user to fetch
        //console.log(await User.find());
         const users = await User.find().lean();
        console.log(JSON.stringify(user,null,2));
        
        //Referencing
        const userRefSchema = new mongoose.Schema({
            name:String,
        });

        const orderRefSchema = new mongoose.Schema({
            product:String,
            price:Number,
            user:{
                type: mongoose.Schema.Types.ObjectId,
                ref:'UserRef'
            }
        });
        const UserRef =  mongoose.model('UserRef',userRefSchema);
        const OrderRef = mongoose.model('OrderRef',orderRefSchema);

        const refUser = await UserRef.create({name:"Darshan"});
        await OrderRef.create([
            {product:"phone",price:25000,user:refUser._id},
            {product:"TV",price:65000,user:refUser._id}
        ]);
        console.log("Referenced Oreders");
        console.log(await OrderRef.find().populate('user'));

    }
    catch(error){
        console.log("Error:",error.message);
    }
    finally{
        await mongoose.disconnect();
        console.log("disconnected from DB..");
    }
}
main();
