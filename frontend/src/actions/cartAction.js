export const addToCart =
  (product, quantity, varient) => (dispatch, getState) => {
    const cartItem = {
      name: product.name,
      _id: product._id,
      image: product.image,
      varient: varient,
      quantity: quantity,
      prices: product.prices,
      price: product.prices[0][varient] * quantity,
    };

    dispatch({ type: "ADD_TO_CART", payload: cartItem });

    const cartItems = getState().cartReducer.cartItems;
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  };
