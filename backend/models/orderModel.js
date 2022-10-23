const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter product name"],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Please enter your email"],
      trim: true,
    },
    userId: {
      type: String,
      required: [true, "Please enter user id"],
    },
    orderItems: [],
    shippingAddress: {
      type: Object,
      required: [true, "Needed shipping address"],
    },
    orderAmount: {
      type: Number,
      required: [true, "Please enter order amount"],
    },
    isDelivered: {
      type: Boolean,
      required: [true, "Delivered or not"],
      default: false,
    },
    transactionId: {
      type: String,
      required: [true, "Please enter transectionId"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Order", orderSchema);
