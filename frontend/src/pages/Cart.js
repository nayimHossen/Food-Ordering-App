import { useSelector, useDispatch } from "react-redux";
import { addToCart, deleteFromCart } from "../actions/cartAction";

const Cart = () => {
  const cartState = useSelector((state) => state.cartReducer);
  const dispatch = useDispatch();
  const cartItems = cartState.cartItems;

  const subtotal = cartItems.reduce((x, item) => x + item.price, 0);
  return (
    <div className="container mx-auto px-5">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="w-full">
          <h1 className="text-2xl font-bold text-center">My Cart</h1>

          {cartItems.map((item) => {
            return (
              <div className="flex justify-center items-center m-5 p-3 gap-5 border">
                <div>
                  <h3>
                    {item.name} [{item.varient}]
                  </h3>
                  <h3>
                    Price: {item.quantity} * {item.prices[0][item.varient]} ={" "}
                    {item.price}
                  </h3>
                  <h3>
                    Quantity:{" "}
                    <button
                      onClick={() =>
                        dispatch(
                          addToCart(item, item.quantity - 1, item.varient)
                        )
                      }
                      className="btn btn-xs"
                    >
                      -
                    </button>
                    {item.quantity}
                    <button
                      onClick={() =>
                        dispatch(
                          addToCart(item, item.quantity + 1, item.varient)
                        )
                      }
                      className="btn btn-xs"
                      max="10"
                    >
                      +
                    </button>
                  </h3>
                </div>
                <div>
                  <figure className="cursor-pointer">
                    <img
                      src={item.image}
                      alt="product-img"
                      className="rounded-xl w-24"
                    />
                  </figure>
                </div>
                <div>
                  <button
                    onClick={() => dispatch(deleteFromCart(item))}
                    className="btn btn-xs"
                  >
                    Delete
                  </button>
                </div>
              </div>
            );
          })}
        </div>
        <div className="text-center">
          <h2 className="text-center text-2xl font-bold">
            Subtotal: {subtotal}
          </h2>
          <button className="btn btn-primary">Pay Now</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
