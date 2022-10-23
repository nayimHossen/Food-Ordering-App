import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUserOrders } from "../actions/orderAction";
import Loading from "../components/Loading";
import Error from "../components/Error";
import OrderCart from "../components/OrderCart";

const Order = () => {
  const dispatch = useDispatch();
  const orderState = useSelector((state) => state.getUserOrderReducer);
  const { loading, error, orders } = orderState;

  useEffect(() => {
    dispatch(getUserOrders());
  }, []);
  console.log("hello order", orders?.orders);
  return (
    <section>
      <div className="container mx-auto px-5 py-16">
        {loading ? (
          <Loading />
        ) : error ? (
          <Error error="something went wrong" />
        ) : (
          orders?.orders?.map((order) => (
            <OrderCart key={order._id} order={order} />
          ))
        )}
      </div>
    </section>
  );
};

export default Order;
