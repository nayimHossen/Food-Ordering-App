const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter product name"],
      trim: true,
    },
    varients: [],
    prices: [],
    category: {
      type: String,
      required: [true, "Please enter category name"],
    },
    image: {
      type: String,
      required: [true, "Please enter image name"],
    },
    description: {
      type: String,
      required: [true, "Please enter description name"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Product", productSchema);
