const express = require("express")
const router = express.Router();

const ratingController = require("../controller/review.controller.js");
const authenticate = require("../middleware/authenticate.js");

router.post("/create",authenticate,ratingController.createReview);
router.get("/product/:productId",authenticate,ratingController.getAllReview);

module.exports = router;