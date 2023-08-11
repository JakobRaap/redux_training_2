import React from "react";

import MealCardList from "../components/MealCardList";
import { useGetMealsByNameQuery } from "../features/api/mealApiSlice";
import { useSelector } from "react-redux";
import { selectNumberOfMealsToShow } from "../features/numberOfMeals/numberOfMealsSlice";
import Footer from "../components/Footer";

const Shop = () => {
  const { data, isLoading, error } = useGetMealsByNameQuery("");
  const numberOfMeals = useSelector(selectNumberOfMealsToShow);
  if (isLoading) return <div>Loading................</div>;
  if (error) return <h1>{error}</h1>;
  const mealsToShow = data.meals.slice(0, numberOfMeals);

  return (
    <div>
      {" "}
      <MealCardList meals={mealsToShow}></MealCardList>
      <Footer numberOfFetchedItems={data.meals.length}></Footer>
    </div>
  );
};

export default Shop;
