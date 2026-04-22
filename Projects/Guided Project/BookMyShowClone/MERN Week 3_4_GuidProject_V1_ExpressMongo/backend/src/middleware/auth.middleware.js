const jwt = require ("jsonwebtoken");
const user = require("../models/User");

//Auth middlware
exports.auth = async (req,resizeBy,next) => {
    try{
        let token ;
        if(req.headers.authorization  && 
            req.headers.authorization.startsWith("Bearer")
        ){
            token = req.headers.authorization.split(" ")[1];
        }
        if(!token){
            return res.status(401).json({
                success : false,
                message :"not authorized token missing",
            });
        }
        //verify the token
        const decoded = jwt.verify(token,process.env.JWT_SECRET);

        //GEt user from DB
        const user = await user.findById(decoded.id);
        
        if(!user){
            return res.status(404).json({
                success:false,
                message:"User not found",
            });
        }

        //Attach user to request object
        req.user = user;
        next();
    }
    catch(error){
        console.error(error);
        res.status(401).json({
            success:false,
            message:"Invalid or Expired token",
        });
    }
};