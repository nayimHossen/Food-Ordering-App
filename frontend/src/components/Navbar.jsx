import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { logoutUser } from "../actions/userAction";

const Navbar = () => {
  const dispatch = useDispatch();
  const cartState = useSelector((state) => state.cartReducer);
  const userState = useSelector((state) => state.loginUserReducer);

  const { currentUser } = userState;
  return (
    <header className="shadow-md py-4">
      <nav className="flex items-center justify-between container mx-auto px-5">
        <div>
          <h2 className="text-3xl font-bold">
            <Link to="/">Pizza.</Link>
          </h2>
        </div>
        <div>
          <ul className="flex gap-5">
            {currentUser ? (
              <div className="dropdown dropdown-end">
                <li tabIndex={0} className="m-1">
                  {currentUser.name}
                </li>
                <ul
                  tabIndex={0}
                  className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
                >
                  <li>
                    <a>Order</a>
                  </li>
                  <li>
                    <Link to="" onClick={() => dispatch(logoutUser())}>
                      Logout
                    </Link>
                  </li>
                </ul>
              </div>
            ) : (
              <li className="font-bold">
                <Link to="/login">Login</Link>
              </li>
            )}

            <li className="font-bold">
              <Link to="/cart">Cart{cartState.cartItems.length}</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
