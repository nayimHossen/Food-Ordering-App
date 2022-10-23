import React from "react";
import StripeCheckout from "react-stripe-checkout";
import { useSelector, useDispatch } from "react-redux";
import { placeOrder } from "../actions/orderAction";
import Loading from "../components/Loading";
import Success from "../components/Success";
import Error from "../components/Error";

const Checkout = ({ subtotal }) => {
  const orderState = useSelector((state) => state.placeOrderReducer);
  const { loading, error, success } = orderState;
  const dispatch = useDispatch();
  const tokenHandler = (token) => {
    console.log("checkout", token);
    dispatch(placeOrder(token, subtotal));
  };
  return (
    <div>
      {loading && <Loading />}
      {error && <Error error="something went wrong" />}
      {success && <Success success="Order placed successfully" />}
      <StripeCheckout
        amount={subtotal * 100}
        shippingAddress
        token={tokenHandler}
        currency="USD"
        stripeKey="pk_test_51Lw6meD2yUHGRg6IZ2vH0Z9swqjgIxnQ2pDtWF1uM4nNl3FzIZTs7GhuZybpQ0yHlopDQBgQK3tO8tBxRYFsxsv100ld7KKRyu"
      >
        <button className="btn btn-primary">Pay Now</button>
      </StripeCheckout>
    </div>
  );
};

export default Checkout;
