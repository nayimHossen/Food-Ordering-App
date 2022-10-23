const express = require("express");
const { orderPlace, getUserOrders } = require("../controllers/orderController");

const router = express.Router();

router.route("/orders/placeorder").post(orderPlace);
router.route("/orders/getuserorder").post(getUserOrders);

module.exports = router;
