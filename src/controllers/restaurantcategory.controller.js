const fs = require("fs");
const { restaurantcategoryService, emailService } = require("../services");

/** create restaurantcategory */
const createRestaurantcategory = async (req, res) => {
  try {
    const reqBody = req.body;

    const restaurantcategoryExists = await restaurantcategoryService.getrestaurantcategoryByEmail(
      reqBody.email
    );
    if (restaurantcategoryExists) {
      throw new Error("restaurantcategory already created by this email!");
    }

    const restaurantcategory = await restaurantcategoryService.createrestaurantcategory(reqBody);
    if (!restaurantcategory) {
      throw new Error("Something went wrong, please try again or later!");
    }

    res.status(200).json({
      success: true,
      message: "restaurantcategory create successfully!",
      data: { restaurantcategory },
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Get restaurantcategory list */
const getRestaurantcategoryList = async (req, res) => {
  try {
    const { search, ...options } = req.query;
    let filter = {};

    if (search) {
      filter.$or = [
        { first_name: { $regex: search, $options: "i" } },
        { last_name: { $regex: search, $options: "i" } },
      ];
    }

    const getList = await restaurantcategoryService.getrestaurantcategoryList(
      filter,
      options
    );

    res.status(200).json({
      success: true,
      message: "Get restaurantcategory list successfully!",
      data: getList,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Get restaurantcategory details by id */
const getRestaurantcategoryDetails = async (req, res) => {
  try {
    const getDetails = await restaurantcategoryService.getrestaurantcategoryById(
      req.params.restaurantcategoryId
    );
    if (!getDetails) {
      throw new Error("restaurantcategory not found!");
    }

    res.status(200).json({
      success: true,
      message: "restaurantcategory details get successfully!",
      data: getDetails,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** restaurantcategory details update by id */
const updateDetails = async (req, res) => {
  try {
    const restaurantcategoryId = req.params.restaurantcategoryId;
    const restaurantcategoryExists = await restaurantcategoryService.getrestaurantcategoryById(
      restaurantcategoryId
    );
    if (!restaurantcategoryExists) {
      throw new Error("restaurantcategory not found!");
    }

    await restaurantcategoryService.updateDetails(restaurantcategoryId, req.body);

    res
      .status(200)
      .json({
        success: true,
        message: "restaurantcategory details update successfully!",
      });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Delete restaurantcategory */
const deleteRestaurantcategory = async (req, res) => {
  try {
    const restaurantcategoryId = req.params.restaurantcategoryId;
    const restaurantcategoryExists = await restaurantcategoryService.getrestaurantcategoryById(
      restaurantcategoryId
    );
    if (!restaurantcategoryExists) {
      throw new Error("restaurantcategory not found!");
    }

    await restaurantcategoryService.deleterestaurantcategory(restaurantcategoryId);

    res.status(200).json({
      success: true,
      message: "restaurantcategory delete successfully!",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

module.exports = {
  createRestaurantcategory,
  getRestaurantcategoryList,
  getRestaurantcategoryDetails,
  updateDetails,
  deleteRestaurantcategory,
};
