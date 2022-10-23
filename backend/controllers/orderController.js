const { v4: uuidv4 } = require("uuid");
const stripe = require("stripe")(
  "sk_test_51Lw6meD2yUHGRg6IaufzbCHjprQqT3inSvrA5ukZnT1MTAhB4XmwIolm41jgewuFoOfv6yV5pBXMgMfV6rBhEjMu00ShjWQZWc"
);

//GET ALL PRODUCT
exports.orderPlace = async (req, res, next) => {
  const { token, subtotal, currentUser, cartItems } = req.body;

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
      res.send("payment done");
    } else {
      res.send("payment faield");
    }
  } catch (error) {
    return res.status(400).json({
      message: "something went wrong" + error,
    });
  }
};
