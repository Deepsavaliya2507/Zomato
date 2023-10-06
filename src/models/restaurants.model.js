const mongoose = require("mongoose");

const restaurantsSchema = new mongoose.Schema(
  {
    restaurant_name: {
      type: String,
      trim: true,
    },
    restaurant_owner_name: {
      type: String,
      trim: true,
    },
    area: {
      type: String,
      trim: true,
    },
    address: {
      type: String,
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

const Restaurants = mongoose.model("restaurants", restaurantsSchema);
module.exports = Restaurants;
