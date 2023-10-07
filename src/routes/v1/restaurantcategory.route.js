const express = require("express");
const { restaurantcategoryValidation } = require("../../validations");
const { restaurantcategoryController } = require("../../controllers");
const validate = require("../../middlewares/validate");

const router = express.Router();

/** create restaurantcategory */
router.post(
  "/create-restaurantcategory",
  validate(restaurantcategoryValidation.createRestaurantcategory),
  restaurantcategoryController.createRestaurantcategory
);

/** Get restaurantcategory list */
router.get(
  "/list",
  validate(restaurantcategoryValidation.getRestaurantcategoryList),
  restaurantcategoryController.getRestaurantcategoryList
);

/** Get restaurantcategory details by id */
router.get(
  "/get-details/:restaurantcategoryId",
  validate(restaurantcategoryValidation.getDetails),
  restaurantcategoryController.getRestaurantcategoryDetails
);

/** restaurantcategory details update by id */
router.put(
  "/update-details/:restaurantcategoryId",
  validate(restaurantcategoryValidation.updateDetails),
  restaurantcategoryController.updateDetails
);

/** Delete restaurantcategory */
router.delete(
  "/delete-restaurantcategory/:restaurantcategoryId",
  validate(restaurantcategoryValidation.getDetails),
  restaurantcategoryController.deleteRestaurantcategory
);

module.exports = router;
