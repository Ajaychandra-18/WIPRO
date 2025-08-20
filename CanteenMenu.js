import React from "react";  // Just like we do import in Python, this imports the React library so we can use JSX and React features.
import CanteenItem from "./CanteenItem";  // This brings in the CanteenItem component (so we can reuse it here).

// We are creating a function named CanteenMenu using an arrow function.
//You can think of it as:
//def CanteenMenu():
//return (

const CanteenMenu = () => {

    // <div> is a container. It’s like saying “start of the block where we will show all information”.
  return (
    <div>
      <h2>Canteen Name: Campus Food Court</h2>
      <p>Location: Block A, Ground Floor</p>
      <p>Open Hours: 8:00 AM – 8:00 PM</p>

      <h3>Canteen Menu:</h3>
      <CanteenItem
        name="Idli"
        price={30}
        category="Breakfast"
        available="Yes"
      />
      <CanteenItem
        name="Dosa"
        price={50}
        category="Breakfast"
        available="Yes"
      />
      <CanteenItem
        name="Vada"
        price={20}
        category="Snack"
        available="No"
      />
      <CanteenItem
        name="Poori"
        price={40}
        category="Breakfast"
        available="Yes"
      />
      <CanteenItem
        name="Meals"
        price={120}
        category="Lunch"
        available="Yes"
      />
    </div>
  );
};

export default CanteenMenu;  //Makes this component available to be imported into other files (like App.js).
