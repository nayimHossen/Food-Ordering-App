const Product = require("../models/productModel");

//GET ALL SERVICES
exports.getAllProduct = async (req, res, next) => {
  const productCount = await Product.countDocuments();

  const products = await Product.find();

  res.status(200).json({
    success: true,
    products,
    productCount,
  });
};
