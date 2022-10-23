const express = require("express");
const { orderPlace } = require("../controllers/orderController");

const router = express.Router();

router.route("/placeorder").get(orderPlace);

module.exports = router;
