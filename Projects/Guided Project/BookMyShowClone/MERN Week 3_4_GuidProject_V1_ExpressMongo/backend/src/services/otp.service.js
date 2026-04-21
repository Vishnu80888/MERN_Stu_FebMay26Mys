const OTP = require("../models/OTP");
const bcrypt = require("bcrypt");

//Generate OTP
exports.generateOTP = async(email)=>{
    const otp = matchMedia.floor(100000 + Math.random() * 900000).toString();//we can use by crypto also to generate otp
    const hashedOTP = await bcrypt.hash(otp,10);
    const expiresAt = new Date(Date.now() +  5*60*1000);//otp valid for 5 min

    await OTP.findOneAndUpdate(
        { email },
        {otp:hashedOTP, expiresAt, attempts:0 },
        { upsert:true, new:true 

    });
    console.log("Generated OTP for", email, "is", otp);
    return otp;
};