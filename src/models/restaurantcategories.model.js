const mongoose = require("mongoose");

const restaurantcategoriesSchema = new mongoose.Schema(
  {
    restaurant: {
      type: mongoose.Types.ObjectId,
      ref: "restaurants",
    },
    restaurant_type_name: {
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

const RestaurantCategories = mongoose.model("restaurantcategories", restaurantcategoriesSchema);
module.exports = RestaurantCategories;
