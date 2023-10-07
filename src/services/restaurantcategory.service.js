const { Restaurantcategories } = require("../models");

/**
 * Create Restaurantcategories
 * @param {object} reqBody
 * @returns {Promise<Restaurantcategories>}
 */
const createRestaurantcategories = async (reqBody) => {
  return Restaurantcategories.create(reqBody);
};

/**
 * Get Restaurantcategories list
 * @param {object} filter
 * @param {object} options
 * @returns {Promise<Restaurantcategories>}
 */
const getRestaurantcategoriesList = async (filter, options) => {
  const skip = (Number(options.page || 1) - 1) * Number(options.limit || 10);

  return Restaurantcategories.find(filter).skip(skip).limit(options.limit).select("-password");
};

/**
 * Get Restaurantcategories by first_name
 * @param {string} first_name
 * @returns {Promise<Restaurantcategories>}
 */
const getRestaurantcategoriesByName = async (first_name) => {
  return Restaurantcategories.findOne({ first_name });
};

/**
 * Get Restaurantcategories details by id
 * @param {ObjectId} RestaurantcategoriesId
 * @returns {Promise<Restaurantcategories>}
 */
const getRestaurantcategoriesById = async (RestaurantcategoriesId) => {
  return Restaurantcategories.findById(RestaurantcategoriesId);
};

/**
 * Restaurantcategories details update by id
 * @param {ObjectId} RestaurantcategoriesId
 * @param {object} updateBody
 * @returns {Promise<Restaurantcategories>}
 */
const updateDetails = async (RestaurantcategoriesId, updateBody) => {
  return Restaurantcategories.findByIdAndUpdate(RestaurantcategoriesId, { $set: updateBody });
};

/**
 * Delete Restaurantcategories
 * @param {ObjectId} RestaurantcategoriesId
 * @returns {Promise<Restaurantcategories>}
 */
const deleteRestaurantcategories = async (RestaurantcategoriesId) => {
  return Restaurantcategories.findByIdAndDelete(RestaurantcategoriesId);
};

module.exports = {
  createRestaurantcategories,
  getRestaurantcategoriesList,
  getRestaurantcategoriesById,
  updateDetails,
  getRestaurantcategoriesByName,
  deleteRestaurantcategories,
};
