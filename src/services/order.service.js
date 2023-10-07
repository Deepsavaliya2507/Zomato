const { Order } = require("../models");

/**
 * Create Order
 * @param {object} reqBody
 * @returns {Promise<Order>}
 */
const createOrder = async (reqBody) => {
  return Order.create(reqBody);
};

/**
 * Get Order list
 * @param {object} filter
 * @param {object} options
 * @returns {Promise<Order>}
 */
const getOrderList = async (filter, options) => {
  const skip = (Number(options.page || 1) - 1) * Number(options.limit || 10);

  return Order.find(filter).skip(skip).limit(options.limit).select("-password");
};

/**
 * Get Order by first_name
 * @param {string} first_name
 * @returns {Promise<Order>}
 */
const getOrderByName = async (first_name) => {
  return Order.findOne({ first_name });
};

/**
 * Get Order details by id
 * @param {ObjectId} OrderId
 * @returns {Promise<Order>}
 */
const getOrderById = async (OrderId) => {
  return Order.findById(OrderId);
};

/**
 * Order details update by id
 * @param {ObjectId} OrderId
 * @param {object} updateBody
 * @returns {Promise<Order>}
 */
const updateDetails = async (OrderId, updateBody) => {
  return Order.findByIdAndUpdate(OrderId, { $set: updateBody });
};

/**
 * Delete Order
 * @param {ObjectId} OrderId
 * @returns {Promise<Order>}
 */
const deleteOrder = async (OrderId) => {
  return Order.findByIdAndDelete(OrderId);
};

module.exports = {
  createOrder,
  getOrderList,
  getOrderById,
  updateDetails,
  getOrderByName,
  deleteOrder,
};
