const express = require ("express");
const router = express.Router();
const { protect } = require("../middleware/auth.middleware");
const {authorizeRoles} = require("../middleware/role.middleware");

//Public route : get all movies 
router.get("/",async (req,res)=>{
    res.send("Get all movies");
 });

//Admin route only

router.post("/",protect,authorizeRoles("admin"),(req,res)=>{
    res.send("Create a movie");
 });

 module.exports = router;
