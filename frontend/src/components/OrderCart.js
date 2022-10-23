import React from "react";

const OrderCart = ({ order }) => {
  return (
    <div className="grid grid-cols-3 gap-4 border-2 m-5 p-4">
      <div>
        <div>
          <h2 className="text-xl font-bold">Items</h2>

          {order.orderItems.map((item) => {
            return (
              <div>
                <h2>
                  {item.name}[{item.varient}] * {item.quantity} * {item.price}
                </h2>
              </div>
            );
          })}
        </div>
      </div>
      <div>
        <h2 className="text-xl font-bold">Address</h2>
        <h2>{order.shippingAddress.street}</h2>
        <h2>{order.shippingAddress.city}</h2>
        <h2>{order.shippingAddress.country}</h2>
        <h2>{order.shippingAddress.pincode}</h2>
      </div>
      <div>
        <h2 className="text-xl font-bold">Order info</h2>
        <h2>Order amount: {order.orderAmount}</h2>
        <h2>Date: {order.createdAt.substring(0, 10)}</h2>
        <h2>transactionId : {order.transactionId}</h2>
      </div>
    </div>
  );
};

export default OrderCart;
