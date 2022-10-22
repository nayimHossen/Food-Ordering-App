import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../actions/cartAction";

const Cart = () => {
  const cartState = useSelector((state) => state.cartReducer);
  const dispatch = useDispatch();

  const cartItems = cartState.cartItems;
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
                  <button className="btn btn-xs">Delete</button>
                </div>
              </div>
            );
          })}
        </div>
        <div>4</div>
      </div>
    </div>
  );
};

export default Cart;
