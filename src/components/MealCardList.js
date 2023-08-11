import React from "react";
import MealCard from "./MealCard";

const MealCardList = ({ meals }) => {
  return (
    <ul>
      {meals.map((meal, index) => (
        <MealCard meal={meal} key={`${meal.idMeal}-${index}`}></MealCard>
      ))}
    </ul>
  );
};

export default MealCardList;
