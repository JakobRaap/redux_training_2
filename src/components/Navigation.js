import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectCartItems } from "../features/cart/cartSlice";

const Navigation = () => {
  const numberOfItemsInCart = useSelector(selectCartItems).length;
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Shop</Link>
        </li>
        <li>
          {" "}
          <Link to="/cart">Cart: {numberOfItemsInCart}</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
