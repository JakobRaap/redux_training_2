import React from "react";
import MealCardList from "../components/MealCardList";
import { useSelector } from "react-redux";
import { selectCartItems } from "../features/cart/cartSlice";

const Cart = () => {
  const cartMeals = useSelector(selectCartItems);
  const mealsWithPrice = cartMeals.map((meal) => {
    return { ...meal, price: (parseFloat(meal.idMeal) / 10000).toFixed(2) };
  });
  const totalCost = mealsWithPrice
    .reduce((total, meal) => total + parseFloat(meal.price), 0)
    .toFixed(2);

  return (
    <div>
      <h2>total cost: {totalCost} $</h2>
      <MealCardList meals={cartMeals}></MealCardList>
    </div>
  );
};

export default Cart;
