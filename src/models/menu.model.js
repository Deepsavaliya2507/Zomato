const mongoose = require("mongoose");

const menuSchema = new mongoose.Schema(
  {
    restaurants: {
      type: mongoose.Types.ObjectId,
      ref: "restaurants",
    },
    product_name: {
      type: String,
      trim: true,
    },
    description: {
      type: String,
      trim: true,
    },
    price: {
      type: String,
      trim: true,
    },
    is_active: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const Menu = mongoose.model("menu", menuSchema);
module.exports = Menu;
