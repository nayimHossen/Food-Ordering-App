const express = require("express");
const { orderPlace } = require("../controllers/orderController");

const router = express.Router();

router.route("/placeorder").post(orderPlace);

module.exports = router;
