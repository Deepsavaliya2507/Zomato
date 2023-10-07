const Joi = require("joi");

/** create Restaurantcategory */
const createRestaurantcategory = {
  body: Joi.object().keys({
    restaurant_type_name: Joi.string().required().trim(),
  }),
};

/** GEt Restaurantcategory list */
const getRestaurantcategoryList = {
  query: Joi.object().keys({
    search: Joi.string().trim().allow(""),
    sortBy: Joi.string().trim().allow(""),
    limit: Joi.number().integer().allow(""),
    page: Joi.number().integer().allow(""),
  }),
};

/** Get Restaurantcategory details by id */
const getDetails = {
  params: Joi.object().keys({
    restaurantcategoryId: Joi.string().required().trim(),
  }),
};

/** Restaurantcategory details update by id */
const updateDetails = {
  params: Joi.object().keys({
    restaurantcategoryId: Joi.string().required().trim(),
  }),
  body: Joi.object().keys({
    restaurant_type_name: Joi.string().trim(),
  }),
};

module.exports = {
  createRestaurantcategory,
  getDetails,
  getRestaurantcategoryList,
  updateDetails,
};
