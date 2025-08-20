import React, { Component } from "react";  // Imports React and the Component class.
// We need Component because we are creating a class component.

class MenuItem extends Component {  //This creates a class named MenuItem which extends (inherits) all the features of React’s Component class.
  render() {  // Every class component must have a render() method. Whatever we return inside this method will be shown in the browser.
    const { name, price, category, available } = this.props;  // this.props contains all the values sent from the parent. We destructure it into 4 variables to make it easy to use.

    return (
      <div>
        {name} – ₹ {price} ({category}),{" "}
        {available === "Yes" ? "Available" : "Not Available"}     
      </div>
    );
  }
}

// A ternary operator that checks whether it is available or not:If available is "Yes" → it prints Available
//Otherwise → Not Available

export default MenuItem;
