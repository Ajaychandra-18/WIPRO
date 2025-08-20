import React, { useState } from "react";

const Electronics = () => {
  const [name] = useState("Laptop"); // no setter needed
  const [brand, setBrand] = useState("Dell");
  const [price, setPrice] = useState(55000);

  const changeBrand = () => {
    setBrand("HP");
  };

  const increasePrice = () => {
    setPrice(price + 1000);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h2>💻 Electronic Item Details</h2>
      <p>Name: {name}</p>
      <p>Brand: {brand}</p>
      <p>Price: ₹{price}</p>
      <button
        onClick={changeBrand}
        style={{
          marginRight: "10px",
          backgroundColor: "gray",
          color: "white",
          padding: "8px 16px",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
        }}
      >
        Change Brand
      </button>
      <button
        onClick={increasePrice}
        style={{
          backgroundColor: "dodgerblue",
          color: "white",
          padding: "8px 16px",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
        }}
      >
        Increase Price
      </button>
    </div>
  );
};

export default Electronics;
