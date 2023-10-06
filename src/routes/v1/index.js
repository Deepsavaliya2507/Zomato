const express = require("express");
const userRoute = require("./user.route");
const restaurantsRoute = require("./restaurants.route");

const router = express.Router();

router.use("/user", userRoute);
router.use("/restaurants", restaurantsRoute);


module.exports = router;
