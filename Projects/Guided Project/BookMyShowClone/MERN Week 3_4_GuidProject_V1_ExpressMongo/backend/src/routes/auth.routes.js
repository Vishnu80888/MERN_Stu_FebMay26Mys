const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth.controller");

//Routes

router.post("/register", authController.registerUser);
router.post("/verify-otp", authController.veriftyOTP);
router.post("/login", authController.login);

 module.exports = router;
