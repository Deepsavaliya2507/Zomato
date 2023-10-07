const express = require("express");
const { orderValidation } = require("../../validations");
const { orderController } = require("../../controllers");
const validate = require("../../middlewares/validate");

const router = express.Router();

/** create order */
router.post(
  "/create-order",
  validate(orderValidation.createOrder),
  orderController.createOrder
);

/** Get order list */
router.get(
  "/list",
  validate(orderValidation.getOrderList),
  orderController.getOrderList
);

/** Get order details by id */
router.get(
  "/get-details/:orderId",
  validate(orderValidation.getDetails),
  orderController.getOrderDetails
);

/** order details update by id */
router.put(
  "/update-details/:orderId",
  validate(orderValidation.updateDetails),
  orderController.updateDetails
);

/** Delete order */
router.delete(
  "/delete-order/:orderId",
  validate(orderValidation.getDetails),
  orderController.deleteOrder
);

module.exports = router;
