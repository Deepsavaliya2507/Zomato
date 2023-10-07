const Joi = require("joi");

/** create review */
const createReview = {
  body: Joi.object().keys({
    rating: Joi.string().required().trim(),
    comment: Joi.string().required().trim(),
    data_posted: Joi.number().required().integer(),
  }),
};

/** GEt review list */
const getReviewList = {
  query: Joi.object().keys({
    search: Joi.string().trim().allow(""),
    sortBy: Joi.string().trim().allow(""),
    limit: Joi.number().integer().allow(""),
    page: Joi.number().integer().allow(""),
  }),
};

/** Get review details by id */
const getDetails = {
  params: Joi.object().keys({
    reviewId: Joi.string().required().trim(),
  }),
};

/** review details update by id */
const updateDetails = {
  params: Joi.object().keys({
    reviewId: Joi.string().required().trim(),
  }),
  body: Joi.object().keys({
    rating: Joi.string().trim(),
    comment: Joi.string().trim(),
    email: Joi.string().email().required(),
  }),
};

module.exports = {
  createReview,
  getDetails,
  getReviewList,
  updateDetails,
};
