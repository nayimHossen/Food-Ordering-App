const Order = require("../models/orderModel");

const { v4: uuidv4 } = require("uuid");
const stripe = require("stripe")(
  "sk_test_51Lw6meD2yUHGRg6IaufzbCHjprQqT3inSvrA5ukZnT1MTAhB4XmwIolm41jgewuFoOfv6yV5pBXMgMfV6rBhEjMu00ShjWQZWc"
);

//GET ALL PRODUCT
exports.orderPlace = async (req, res, next) => {
  const { token, subtotal, currentUser, cartItems } = req.body;
  console.log(currentUser._id);

  try {
    const customer = await stripe.customers.create({
      email: token.email,
      source: token.id,
    });

    const payment = await stripe.charges.create(
      {
        amount: subtotal * 100,
        currency: "USD",
        customer: customer.id,
        receipt_email: token.email,
      },
      {
        idempotencyKey: uuidv4(),
      }
    );

    if (payment) {
      const newOrder = await Order.create({
        name: currentUser.name,
        email: currentUser.email,
        userId: currentUser._id,
        orderItems: cartItems,
        orderAmount: subtotal,
        shippingAddress: {
          street: token.card.address_line1,
          city: token.card.address_city,
          country: token.card.address_country,
          pincode: token.card.address_zip,
        },
        transactionId: payment.source.id,
      });

      return res.status(201).json({
        success: true,
        message: "Order is Complite",
        newOrder,
      });
    } else {
      res.send("payment faield");
    }
  } catch (error) {
    return res.status(400).json({
      message: "something went wrong" + error,
    });
  }
};

//GET USER ORDER
exports.getUserOrders = async (req, res, next) => {
  const { userId } = req.body;
  try {
    const orders = await Order.find({ userId: userId }).sort({ _id: -1 });

    return res.status(200).json({
      success: true,
      orders,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: "something went wrong",
    });
  }
};
