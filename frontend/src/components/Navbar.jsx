import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = () => {
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
              <li>{currentUser.name}</li>
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
