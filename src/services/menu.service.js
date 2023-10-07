const { Menu } = require("../models");

/**
 * Create Menu
 * @param {object} reqBody
 * @returns {Promise<Menu>}
 */
const createMenu = async (reqBody) => {
  return Menu.create(reqBody);
};

/**
 * Get Menu list
 * @param {object} filter
 * @param {object} options
 * @returns {Promise<Menu>}
 */
const getMenuList = async (filter, options) => {
  const skip = (Number(options.page || 1) - 1) * Number(options.limit || 10);

  return Menu.find(filter).skip(skip).limit(options.limit).select("-password");
};

/**
 * Get Menu by first_name
 * @param {string} first_name
 * @returns {Promise<Menu>}
 */
const getMenuByName = async (first_name) => {
  return Menu.findOne({ first_name });
};

/**
 * Get Menu details by id
 * @param {ObjectId} MenuId
 * @returns {Promise<Menu>}
 */
const getMenuById = async (MenuId) => {
  return Menu.findById(MenuId);
};

/**
 * Menu details update by id
 * @param {ObjectId} MenuId
 * @param {object} updateBody
 * @returns {Promise<Menu>}
 */
const updateDetails = async (MenuId, updateBody) => {
  return Menu.findByIdAndUpdate(MenuId, { $set: updateBody });
};

/**
 * Delete Menu
 * @param {ObjectId} MenuId
 * @returns {Promise<Menu>}
 */
const deleteMenu = async (MenuId) => {
  return Menu.findByIdAndDelete(MenuId);
};

module.exports = {
  createMenu,
  getMenuList,
  getMenuById,
  updateDetails,
  getMenuByName,
  deleteMenu,
};
