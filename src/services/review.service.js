const { Review } = require("../models");

/**
 * Create Review
 * @param {object} reqBody
 * @returns {Promise<Review>}
 */
const createReview = async (reqBody) => {
  return Review.create(reqBody);
};

/**
 * Get Review list
 * @param {object} filter
 * @param {object} options
 * @returns {Promise<Review>}
 */
const getReviewList = async (filter, options) => {
  const skip = (Number(options.page || 1) - 1) * Number(options.limit || 10);

  return Review.find(filter).skip(skip).limit(options.limit).select("-password");
};

/**
 * Get Review by first_name
 * @param {string} first_name
 * @returns {Promise<Review>}
 */
const getReviewByName = async (first_name) => {
  return Review.findOne({ first_name });
};

/**
 * Get Review details by id
 * @param {ObjectId} ReviewId
 * @returns {Promise<Review>}
 */
const getReviewById = async (ReviewId) => {
  return Review.findById(ReviewId);
};

/**
 * Review details update by id
 * @param {ObjectId} ReviewId
 * @param {object} updateBody
 * @returns {Promise<Review>}
 */
const updateDetails = async (ReviewId, updateBody) => {
  return Review.findByIdAndUpdate(ReviewId, { $set: updateBody });
};

/**
 * Delete Review
 * @param {ObjectId} ReviewId
 * @returns {Promise<Review>}
 */
const deleteReview = async (ReviewId) => {
  return Review.findByIdAndDelete(ReviewId);
};

module.exports = {
  createReview,
  getReviewList,
  getReviewById,
  updateDetails,
  getReviewByName,
  deleteReview,
};
