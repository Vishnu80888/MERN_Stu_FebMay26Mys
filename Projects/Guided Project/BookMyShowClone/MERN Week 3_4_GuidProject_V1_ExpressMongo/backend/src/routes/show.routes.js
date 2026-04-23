const express = require("express");
const router = express.Router();
const movieController = require("../controllers/show.controller");
const {protect} = require("../middleware/auth.middleware");
const {authorize} = require("../middleware/role.middleware");

//Public route
router.get("/",showController.getShows);
router.get("/",showController.getShowId);


// Admin only route
router.post("/",protect,authorize("admin"),showController.createshow);
router.put("/:id",protect,authorize("admin"),showController.updateShow);
router.delete("/:id",protect,authorize("admin"),showController.deleteShow);

module.exports = router;