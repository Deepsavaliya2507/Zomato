const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema(
  {
    restaurant: {
      type: mongoose.Types.ObjectId,
      ref: "restaurants",
    },
    user: {
      type: mongoose.Types.ObjectId,
      ref: "users",
    },
    rating: {
      type: Number,
      trim: true,
    },
    comment: {
      type: String,
      trim: true,
    },
    data_posted: {
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

const Review = mongoose.model("review", reviewSchema);
module.exports = Review;
