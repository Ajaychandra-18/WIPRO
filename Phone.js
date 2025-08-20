import React, { useState } from "react";

const Phone = () => {
  // useState to manage price
  const [price, setPrice] = useState(79999);

  // Function to increase price
  const increasePrice = () => {
    setPrice(price + 1000); // increases price by 1000
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>📱 Phone Details</h2>
      <p>Brand: Apple</p>
      <p>Model: iPhone 15</p>
      <p>Price: ₹{price}</p>
      <button
        onClick={increasePrice}
        style={{
          backgroundColor: "dodgerblue",
          color: "white",
          padding: "10px 20px",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
          fontSize: "16px",
        }}
      >
        Increase Price
      </button>
    </div>
  );
};

export default Phone;
