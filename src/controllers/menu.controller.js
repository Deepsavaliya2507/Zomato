const fs = require("fs");
const { menuService, emailService } = require("../services");

/** create menu */
const createMenu = async (req, res) => {
  try {
    const reqBody = req.body;

    const menuExists = await menuService.getMenuByEmail(
      reqBody.email
    );
    if (menuExists) {
      throw new Error("menu already created by this email!");
    }

    const menu = await menuService.createMenu(reqBody);
    if (!menu) {
      throw new Error("Something went wrong, please try again or later!");
    }

    res.status(200).json({
      success: true,
      message: "menu create successfully!",
      data: { menu },
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Get menu list */
const getMenuList = async (req, res) => {
  try {
    const { search, ...options } = req.query;
    let filter = {};

    if (search) {
      filter.$or = [
        { first_name: { $regex: search, $options: "i" } },
        { last_name: { $regex: search, $options: "i" } },
      ];
    }

    const getList = await menuService.getMenuList(
      filter,
      options
    );

    res.status(200).json({
      success: true,
      message: "Get menu list successfully!",
      data: getList,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Get menu details by id */
const getMenuDetails = async (req, res) => {
  try {
    const getDetails = await menuService.getMenuById(
      req.params.menuId
    );
    if (!getDetails) {
      throw new Error("menu not found!");
    }

    res.status(200).json({
      success: true,
      message: "menu details get successfully!",
      data: getDetails,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** menu details update by id */
const updateDetails = async (req, res) => {
  try {
    const menuId = req.params.menuId;
    const menuExists = await menuService.getMenuById(
      menuId
    );
    if (!menuExists) {
      throw new Error("menu not found!");
    }

    await menuService.updateDetails(menuId, req.body);

    res
      .status(200)
      .json({
        success: true,
        message: "menu details update successfully!",
      });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Delete menu */
const deleteMenu = async (req, res) => {
  try {
    const menuId = req.params.menuId;
    const menuExists = await menuService.getMenuById(
      menuId
    );
    if (!menuExists) {
      throw new Error("menu not found!");
    }

    await menuService.deleteMenu(menuId);

    res.status(200).json({
      success: true,
      message: "menu delete successfully!",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

module.exports = {
  createMenu,
  getMenuList,
  getMenuDetails,
  updateDetails,
  deleteMenu,
};
