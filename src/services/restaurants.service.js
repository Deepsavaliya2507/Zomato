const { Restaurants } = require("../models");

/**
 * Create restaurants
 * @param {object} reqBody
 * @returns {Promise<restaurants>}
 */
const createRestaurants = async (reqBody) => {
  return Restaurants.create(reqBody);
};

/**
 * Get restaurants list
 * @param {object} filter
 * @param {object} options
 * @returns {Promise<restaurants>}
 */
const getRestaurantsList = async (filter, options) => {
  const skip = (Number(options.page || 1) - 1) * Number(options.limit || 10);

  return Restaurants.find(filter).skip(skip).limit(options.limit).select("-password");
};

/**
 * Get restaurants by email
 * @param {string} email
 * @returns {Promise<restaurants>}
 */
const getRestaurantsByEmail = async (email) => {
  return Restaurants.findOne({ email });
};

/**
 * Get restaurants details by id
 * @param {ObjectId} restaurantsId
 * @returns {Promise<restaurants>}
 */
const getRestaurantsById = async (restaurantsId) => {
  return Restaurants.findById(restaurantsId);
};

/**
 * restaurants details update by id
 * @param {ObjectId} restaurantsId
 * @param {object} updateBody
 * @returns {Promise<restaurants>}
 */
const updateDetails = async (restaurantsId, updateBody) => {
  return Restaurants.findByIdAndUpdate(restaurantsId, { $set: updateBody });
};

/**
 * Delete restaurants
 * @param {ObjectId} restaurantsId
 * @returns {Promise<restaurants>}
 */
const deleteRestaurants = async (restaurantsId) => {
  return Restaurants.findByIdAndDelete(restaurantsId);
};

module.exports = {
  createRestaurants,
  getRestaurantsList,
  getRestaurantsById,
  updateDetails,
  getRestaurantsByEmail,
  deleteRestaurants,
};
