import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectFavorizedIds,
  toggleFavorize,
} from "../features/favorize/favorizeSlice";

const FavorizeButton = ({ id }) => {
  const favorizedIds = useSelector(selectFavorizedIds);
  const dispatch = useDispatch();
  return (
    <button onClick={() => dispatch(toggleFavorize(id))}>
      {favorizedIds.includes(id) ? "❤️" : "🤍"}
    </button>
  );
};

export default FavorizeButton;
