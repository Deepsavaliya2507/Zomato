const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Types.ObjectId,
      ref: "users",
    },
    restaurant: {
      type: mongoose.Types.ObjectId,
      ref: "restaurants",
    },
    order_date: {
      type: String,
      trim: true,
    },
    menu: {
      type: mongoose.Types.ObjectId,
      ref: "menu",
    },
    total_price: {
      type: String,
      trim: true,
    },
    quantity: {
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

const Order = mongoose.model("order", orderSchema);
module.exports = Order;
