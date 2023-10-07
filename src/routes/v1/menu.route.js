const express = require("express");
const { menuValidation } = require("../../validations");
const { menuController } = require("../../controllers");
const validate = require("../../middlewares/validate");

const router = express.Router();

/** create menu */
router.post(
  "/create-menu",
  validate(menuValidation.createMenu),
  menuController.createMenu
);

/** Get menu list */
router.get(
  "/list",
  validate(menuValidation.getMenuList),
  menuController.getMenuList
);

/** Get menu details by id */
router.get(
  "/get-details/:menuId",
  validate(menuValidation.getDetails),
  menuController.getMenuDetails
);

/** menu details update by id */
router.put(
  "/update-details/:menuId",
  validate(menuValidation.updateDetails),
  menuController.updateDetails
);

/** Delete menu */
router.delete(
  "/delete-menu/:menuId",
  validate(menuValidation.getDetails),
  menuController.deleteMenu
);

module.exports = router;
