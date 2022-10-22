const Product = require("../models/productModel");

//GET ALL PRODUCT
exports.getAllProduct = async (req, res, next) => {
  try {
    const productCount = await Product.countDocuments();

    const products = await Product.find();

    return res.status(200).json({
      success: true,
      products,
      productCount,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error,
    });
  }
};
