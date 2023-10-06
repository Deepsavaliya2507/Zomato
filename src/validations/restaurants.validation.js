const Joi = require("joi");

/** create restaurants */
const createRestaurants = {
  body: Joi.object().keys({
    restaurant_name: Joi.string().required().trim(),
    restaurant_owner_name: Joi.string().required().trim(),
    area: Joi.string().required().trim(),
    address: Joi.string().trim().required(),
    contact_number: Joi.number().required().integer(),
    owner_number: Joi.number().integer().required(),
  }),
};

/** GEt restaurants list */
const getRestaurantsList = {
  query: Joi.object().keys({
    search: Joi.string().trim().allow(""),
    sortBy: Joi.string().trim().allow(""),
    limit: Joi.number().integer().allow(""),
    page: Joi.number().integer().allow(""),
  }),
};

/** Get restaurants details by id */
const getDetails = {
  params: Joi.object().keys({
    restaurantsId: Joi.string().required().trim(),
  }),
};

/** restaurants details update by id */
const updateDetails = {
  params: Joi.object().keys({
    restaurantsId: Joi.string().required().trim(),
  }),
  body: Joi.object().keys({
    first_name: Joi.string().trim(),
    last_name: Joi.string().trim(),
    email: Joi.string().email().required(),
  }),
};

/** Send mail */
const sendMail = {
  body: Joi.object({
    email: Joi.string().email().required(),
    subject: Joi.string().required().trim(),
    text: Joi.string().required().trim(),
  }),
};

module.exports = {
  createRestaurants,
  getDetails,
  getRestaurantsList,
  updateDetails,
  sendMail,
};
