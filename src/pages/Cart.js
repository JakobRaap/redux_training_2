import React from "react";
import MealCardList from "../components/MealCardList";
import { useDispatch, useSelector } from "react-redux";
import {
  clearCart,
  selectCartItems,
  selectTotalCartCost,
} from "../features/cart/cartSlice";

const Cart = () => {
  const cartMeals = useSelector(selectCartItems);
  const dispatch = useDispatch();
  const totalCost = useSelector(selectTotalCartCost);

  return (
    <div>
      <h2>total cost: {totalCost} $</h2>

      <MealCardList meals={cartMeals}></MealCardList>
      <button onClick={() => dispatch(clearCart())}>clear cart!</button>
    </div>
  );
};

export default Cart;
