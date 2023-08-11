import React from "react";

const Modal = ({ meal, handleCloseModal }) => {
  return (
    <>
      <div
        style={{
          backgroundColor: "rgba(109, 109, 109, 0.5)",
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}
      ></div>{" "}
      <div
        style={{
          position: "fixed",
          border: "1px solid black",
          backgroundColor: "white",
          maxWidth: "800px",
          top: "30%",
          left: "30%",
        }}
      >
        {" "}
        <button onClick={handleCloseModal}>X</button>
        <p>{meal.strInstructions}</p>
      </div>
    </>
  );
};

export default Modal;
