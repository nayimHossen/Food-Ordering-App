import React from "react";

const Navbar = () => {
  return (
    <header className="shadow-md py-4">
      <nav className="flex items-center justify-between container mx-auto px-5">
        <div>
          <h2 className="text-3xl font-bold">Pizza.</h2>
        </div>
        <div>
          <ul className="flex gap-5">
            <li className="font-bold">Login</li>
            <li className="font-bold">Cart</li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
