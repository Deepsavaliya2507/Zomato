const Joi = require("joi");

/** create menu */
const createMenu = {
  body: Joi.object().keys({
    product_name: Joi.string().required().trim(),
    description: Joi.string().required().trim(),
    price: Joi.number().required().integer(),
  }),
};

/** GEt menu list */
const getMenuList = {
  query: Joi.object().keys({
    search: Joi.string().trim().allow(""),
    sortBy: Joi.string().trim().allow(""),
    limit: Joi.number().integer().allow(""),
    page: Joi.number().integer().allow(""),
  }),
};

/** Get menu details by id */
const getDetails = {
  params: Joi.object().keys({
    menuId: Joi.string().required().trim(),
  }),
};

/** menu details update by id */
const updateDetails = {
  params: Joi.object().keys({
    menuId: Joi.string().required().trim(),
  }),
  body: Joi.object().keys({
    product_name: Joi.string().trim(),
    description: Joi.string().trim(),
    price: Joi.string().email().required(),
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
  createMenu,
  getDetails,
  getMenuList,
  updateDetails,
  sendMail,
};
