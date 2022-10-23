import React from "react";
import StripeCheckout from "react-stripe-checkout";
import { useSelector, useDispatch } from "react-redux";

const Checkout = ({ subtotal }) => {
  const dispatch = useDispatch();
  const tokenHandler = (token) => {
    console.log(token);
    dispatch(token, subtotal);
  };
  return (
    <div>
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
