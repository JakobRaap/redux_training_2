import React, { useState } from "react";
import FavorizeButton from "./FavorizeButton";
import Modal from "./Modal";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";

const MealCard = ({ meal }) => {
  const { idMeal, strMeal, strCategory, strIngredient1, strIngredient2 } = meal;
  const dispatch = useDispatch();
  const [isModalVisible, setIsModalVisible] = useState(false);
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
      {!meal.cartItem && (
        <>
          {" "}
          <FavorizeButton id={idMeal}></FavorizeButton>
          <button onClick={() => setIsModalVisible(true)}>
            show more info
          </button>
          <button onClick={() => dispatch(addToCart(meal))}>add to cart</button>
        </>
      )}
    </div>
  );
};

export default MealCard;
