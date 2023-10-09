const express = require("express");
const userRoute = require("./user.route");
const restaurantsRoute = require("./restaurants.route");
const restaurantscategoryRoute = require("./restaurantcategory.route");
const menuRoute = require("./menu.route");
const orderRoute = require("./order.route");
const reviewRoute = require("./review.route");
const imageRoute = require("./images.route");

const router = express.Router();

router.use("/user", userRoute);
router.use("/restaurants", restaurantsRoute);
router.use("/restaurantcategory", restaurantscategoryRoute);
router.use("/menu", menuRoute);
router.use("order", orderRoute);
router.use("/review", reviewRoute);
router.use("/image", imageRoute);

module.exports = router;