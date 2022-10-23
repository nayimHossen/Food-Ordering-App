import axios from "axios";

export const placeOrder = (token, subtotal) => async (dispatch, getState) => {
  dispatch({ type: "PLACE_ORDER_REQUEST" });
  const currentUser = getState().loginUserReducer.currentUser;
  const cartItems = getState().cartReducer.cartItems;

  try {
    const response = await axios.post("/api/v1/orders/placeorder", {
      token,
      subtotal,
      currentUser,
      cartItems,
    });
    dispatch({ type: "PLACE_ORDER_SUCCESS" });

    console.log("from order pleased action", response);
  } catch (error) {
    dispatch({ type: "PLACE_ORDER_FAILED" });
  }
};

export const getUserOrders = () => async (dispatch, getState) => {
  const currentUser = getState().loginUserReducer.currentUser;
  dispatch({ type: "GET_ORDER_REQUEST" });

  try {
    const response = await axios.post(`/api/v1/orders/getuserorder`, {
      userId: currentUser._id,
    });
    console.log("order action data", response);
    dispatch({ type: "GET_ORDER_SUCCESS", payload: response.data });
  } catch (error) {
    dispatch({ type: "GET_ORDER_FAILED", payload: error });
  }
};
