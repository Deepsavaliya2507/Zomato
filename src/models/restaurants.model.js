const mongoose = require("mongoose");

const restaurantSchema = new mongoose.Schema(
  {
    restaurant_name: {
      type: String,
      trim: true,
    },
    restaurant_owner_id: {
      type: String,
      trim: true,
    },
    city: {
      type: String,
      trim: true,
    },
    address: {
      type: String,
      trim: true,
    },
    state: {
      type: String,
      trim: true,
    },
    zipcode: {
      type: Number,
      trim: true,
    },
    contact_number: {
      type: Number,
      trim: true,
    },
    owner_number: {
      type: Number,
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

const Restaurants = mongoose.model("restaurants", restaurantSchema);
module.exports = Restaurants;
