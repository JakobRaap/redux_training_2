import React, { useState } from "react";
import FavorizeButton from "./FavorizeButton";
import Modal from "./Modal";
import { useDispatch } from "react-redux";
import { addToCart, deleteFromCart } from "../features/cart/cartSlice";

const MealCard = ({ meal }) => {
  const { idMeal, strMeal, strCategory, strIngredient1, strIngredient2 } = meal;
  const dispatch = useDispatch();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState(1);

  const handleNumberChange = (event) => {
    setSelectedNumber(parseInt(event.target.value, 10));
  };
  return (
    <div style={{ border: "1px solid black" }}>
      {isModalVisible && (
        <Modal
          meal={meal}
          handleCloseModal={() => setIsModalVisible(false)}
        ></Modal>
      )}
      <h1>{strMeal}</h1>
      <p>{strCategory}</p>
      <p>{strIngredient1 + " and " + strIngredient2}</p>
      <h3>{(parseFloat(idMeal) / 10000).toFixed(2)} $</h3>
      {meal.cartItem && (
        <>
          {" "}
          <h3>
            {meal.amount} x = {(meal.amount * meal.price).toFixed(2)}
          </h3>
          <button onClick={() => dispatch(deleteFromCart(idMeal))}>
            delete
          </button>
        </>
      )}
      {!meal.cartItem && (
        <>
          {" "}
          <FavorizeButton id={idMeal}></FavorizeButton>
          <button onClick={() => setIsModalVisible(true)}>
            show more info
          </button>
          <button
            onClick={() =>
              dispatch(addToCart({ item: meal, amount: selectedNumber }))
            }
          >
            add to cart
          </button>
          <select
            id="numberDropdown"
            value={selectedNumber}
            onChange={handleNumberChange}
          >
            {Array.from({ length: 10 }, (_, index) => index + 1).map(
              (number) => (
                <option key={number} value={number}>
                  {number}
                </option>
              )
            )}
          </select>
        </>
      )}
    </div>
  );
};

export default MealCard;
