const Joi = require("joi");

/** create order */
const createOrder = {
  body: Joi.object().keys({
    menu: Joi.string().required().trim(),
    total_price: Joi.number().required().integer(),
    quantity: Joi.number().required().integer(),
    order_date: Joi.number().required().integer(),
  }),
};

/** GEt order list */
const getOrderList = {
  query: Joi.object().keys({
    search: Joi.string().trim().allow(""),
    sortBy: Joi.string().trim().allow(""),
    limit: Joi.number().integer().allow(""),
    page: Joi.number().integer().allow(""),
  }),
};

/** Get order details by id */
const getDetails = {
  params: Joi.object().keys({
    orderId: Joi.string().required().trim(),
  }),
};

/** order details update by id */
const updateDetails = {
  params: Joi.object().keys({
    orderId: Joi.string().required().trim(),
  }),
  body: Joi.object().keys({
    menu: Joi.string().trim(),
    total_price: Joi.string().trim(),
    quantity: Joi.number().integer().required(),
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
  createOrder,
  getDetails,
  getOrderList,
  updateDetails,
  sendMail,
};
