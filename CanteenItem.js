import React from "react";  // This imports React so we can use JSX and build a component.
// It’s a special syntax used in React that lets us write HTML-like code directly inside JavaScript.
// So JSX makes writing UI code easier and more readable.You can think of it as: “HTML inside JavaScript”

const CanteenItem = ({ name, price, category, available }) => { // In React, a component receives data through something called props (short for properties).
    //you can think of props in React as being similar to function parameters / inputs in Python.


    // //In React, every component needs to return something so that it can be shown on the screen.
    // In our case, the CanteenItem component returns this: <div> data </div>
  return (
    <div>  
      {name} - Price ₹ {price} - Category: {category} -{" "}
      {available === "Yes" ? "Available" : "Not Available"}
    </div>
  );
};

export default CanteenItem;  // Exports the component so it can be imported and used inside other files.
 