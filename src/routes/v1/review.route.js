const express = require("express");
const { reviewValidation } = require("../../validations");
const { reviewController } = require("../../controllers");
const validate = require("../../middlewares/validate");

const router = express.Router();

/** create review */
router.post(
  "/create-review",
  validate(reviewValidation.createReview),
  reviewController.createReview
);

/** Get review list */
router.get(
  "/list",
  validate(reviewValidation.getReviewList),
  reviewController.getReviewList
);

/** Get review details by id */
router.get(
  "/get-details/:reviewId",
  validate(reviewValidation.getDetails),
  reviewController.getReviewDetails
);

/** review details update by id */
router.put(
  "/update-details/:reviewId",
  validate(reviewValidation.updateDetails),
  reviewController.updateDetails
);

/** Delete review */
router.delete(
  "/delete-review/:reviewId",
  validate(reviewValidation.getDetails),
  reviewController.deleteReview
);

module.exports = router;
