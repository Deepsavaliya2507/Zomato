const express = require("express");
const { restaurantsValidation } = require("../../validations");
const { restaurantsController } = require("../../controllers");
const validate = require("../../middlewares/validate");
// const auth = require("../../middlewares/auth");
// const {upload }=require("../../middlewares/upload");

const router = express.Router();

/** create restaurants */
router.post(
  "/create-restaurants",
  // auth(),
  // upload.single("restaurants_image"),
  validate(restaurantsValidation.createRestaurants),
  restaurantsController.createRestaurants
);

/** Get restaurants list */
router.get(
  "/list",
  validate(restaurantsValidation.getRestaurantsList),
  restaurantsController.getRestaurantsList
);

/** Get restaurants details by id */
router.get(
  "/get-details/:restaurantsId",
  validate(restaurantsValidation.getDetails),
  restaurantsController.getRestaurantsDetails
);

/** restaurants details update by id */
router.put(
  "/update-details/:restaurantsId",
  validate(restaurantsValidation.updateDetails),
  restaurantsController.updateDetails
);

/** Delete restaurants */
router.delete(
  "/delete-restaurants/:restaurantsId",
  validate(restaurantsValidation.getDetails),
  restaurantsController.deleteRestaurants
);

/** Send mail */
router.post(
  "/send-mail",
  validate(restaurantsValidation.sendMail),
  restaurantsController.sendMail
);

module.exports = router;
