const express = require("express");
const router = express.Router();
const showController = require("../controllers/booking.controller");

const { protect } = require("../middleware/auth.middleware");

// Create booking (Protected route)
router.post("/", protect,bookingController.createBooking);
router.post("/my", protect,bookingController.getMyBooking);
router.post("/:id", protect,bookingController.cancelBooking);

module.exports = router;                                                                                                                                                                    