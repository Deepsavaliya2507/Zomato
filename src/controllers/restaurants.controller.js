const fs = require("fs");
const { restaurantsService, emailService } = require("../services");

/** create restaurants */
const createRestaurants = async (req, res) => {
  try {
    const reqBody = req.body;

    const restaurantsExists = await restaurantsService.getRestaurantsByEmail(
      reqBody.email
    );
    if (restaurantsExists) {
      throw new Error("restaurants already created by this email!");
    }

    const restaurants = await restaurantsService.createRestaurants(reqBody);
    if (!restaurants) {
      throw new Error("Something went wrong, please try again or later!");
    }

    res.status(200).json({
      success: true,
      message: "restaurants create successfully!",
      data: { restaurants },
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Get restaurants list */
const getRestaurantsList = async (req, res) => {
  try {
    const { search, ...options } = req.query;
    let filter = {};

    if (search) {
      filter.$or = [
        { first_name: { $regex: search, $options: "i" } },
        { last_name: { $regex: search, $options: "i" } },
      ];
    }

    const getList = await restaurantsService.getRestaurantsList(
      filter,
      options
    );

    res.status(200).json({
      success: true,
      message: "Get restaurants list successfully!",
      data: getList,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Get restaurants details by id */
const getRestaurantsDetails = async (req, res) => {
  try {
    const getDetails = await restaurantsService.getRestaurantsById(
      req.params.restaurantsId
    );
    if (!getDetails) {
      throw new Error("restaurants not found!");
    }

    res.status(200).json({
      success: true,
      message: "restaurants details get successfully!",
      data: getDetails,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** restaurants details update by id */
const updateDetails = async (req, res) => {
  try {
    const restaurantsId = req.params.restaurantsId;
    const restaurantsExists = await restaurantsService.getRestaurantsById(
      restaurantsId
    );
    if (!restaurantsExists) {
      throw new Error("restaurants not found!");
    }

    await restaurantsService.updateDetails(restaurantsId, req.body);

    res
      .status(200)
      .json({
        success: true,
        message: "restaurants details update successfully!",
      });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Delete restaurants */
const deleteRestaurants = async (req, res) => {
  try {
    const restaurantsId = req.params.restaurantsId;
    const restaurantsExists = await restaurantsService.getRestaurantsById(
      restaurantsId
    );
    if (!restaurantsExists) {
      throw new Error("restaurants not found!");
    }

    await restaurantsService.deleteRestaurants(restaurantsId);

    res.status(200).json({
      success: true,
      message: "restaurants delete successfully!",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Send mail to reqested email */
const sendMail = async (req, res) => {
  try {
    const reqBody = req.body;
    const sendEmail = await emailService.sendMail(
      reqBody.email,
      reqBody.subject,
      reqBody.text
    );
    if (!sendEmail) {
      throw new Error("Something went wrong, please try again or later.");
    }

    res
      .status(200)
      .json({ success: true, message: "Email send successfully!" });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};
module.exports = {
  createRestaurants,
  getRestaurantsList,
  getRestaurantsDetails,
  updateDetails,
  deleteRestaurants,
  sendMail,
};
