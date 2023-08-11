import React from "react";
import { useDispatch } from "react-redux";
import {
  showTwoLessMeals,
  showTwoMoreMeals,
} from "../features/numberOfMeals/numberOfMealsSlice";

const Footer = ({ numberOfFetchedItems }) => {
  const dispatch = useDispatch();
  return (
    <footer>
      <button onClick={() => dispatch(showTwoMoreMeals(numberOfFetchedItems))}>
        show more meals
      </button>
      <button onClick={() => dispatch(showTwoLessMeals())}>
        show less meals
      </button>
    </footer>
  );
};

export default Footer;
