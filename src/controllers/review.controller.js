const fs = require("fs");
const { dreviewService, emailService } = require("../services");

/** create dreview */
const createReview = async (req, res) => {
  try {
    const reqBody = req.body;

    const dreviewExists = await dreviewService.getdReviewByEmail(
      reqBody.email
    );
    if (dreviewExists) {
      throw new Error("dreview already created by this email!");
    }

    const dreview = await dreviewService.createdReview(reqBody);
    if (!dreview) {
      throw new Error("Something went wrong, please try again or later!");
    }

    res.status(200).json({
      success: true,
      message: "dreview create successfully!",
      data: { dreview },
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Get dreview list */
const getReviewList = async (req, res) => {
  try {
    const { search, ...options } = req.query;
    let filter = {};

    if (search) {
      filter.$or = [
        { first_name: { $regex: search, $options: "i" } },
        { last_name: { $regex: search, $options: "i" } },
      ];
    }

    const getList = await dreviewService.getdReviewList(
      filter,
      options
    );

    res.status(200).json({
      success: true,
      message: "Get dreview list successfully!",
      data: getList,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Get dreview details by id */
const getReviewDetails = async (req, res) => {
  try {
    const getDetails = await dreviewService.getdReviewById(
      req.params.dreviewId
    );
    if (!getDetails) {
      throw new Error("dreview not found!");
    }

    res.status(200).json({
      success: true,
      message: "dreview details get successfully!",
      data: getDetails,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** dreview details update by id */
const updateDetails = async (req, res) => {
  try {
    const dreviewId = req.params.dreviewId;
    const dreviewExists = await dreviewService.getdReviewById(
      dreviewId
    );
    if (!dreviewExists) {
      throw new Error("dreview not found!");
    }

    await dreviewService.updateDetails(dreviewId, req.body);

    res
      .status(200)
      .json({
        success: true,
        message: "dreview details update successfully!",
      });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Delete dreview */
const deleteReview = async (req, res) => {
  try {
    const dreviewId = req.params.dreviewId;
    const dreviewExists = await dreviewService.getdReviewById(
      dreviewId
    );
    if (!dreviewExists) {
      throw new Error("dreview not found!");
    }

    await dreviewService.deletedReview(dreviewId);

    res.status(200).json({
      success: true,
      message: "dreview delete successfully!",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

module.exports = {
  createReview,
  getReviewList,
  getReviewDetails,
  updateDetails,
  deleteReview,
};
