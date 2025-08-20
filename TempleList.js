import React from "react";  // // We import React so that we can write JSX and create a functional component.

const TempleList = () => { // Create a functional component named TempleList using an arrow function.
// This is like writing: def TempleList():

  const temples = [  //Create a JavaScript array named temples. This array contains objects — each object represents one temple.
    {
      id: 1,
      name: "Meenakshi Amman Temple",
      location: "Madurai, Tamil Nadu",
      deities: ["Meenakshi", "Sundareswarar"],
    },
    {
      id: 2,
      name: "Sri Venkateswara Temple",
      location: "Tirupati, Andhra Pradesh",
      deities: ["Venkateswara", "Lakshmi"],
    },
    {
      id: 3,
      name: "Jagannath Temple",
      location: "Puri, Odisha",
      deities: ["Jagannath", "Balabhadra", "Subhadra"],
    },
  ];

  return (  // The component returns JSX (so that something appears in the browser). Starts with a <div> container.
    // <!Create an HTML table.We add a border and some spacing between cells. > 
    <div>
      <h2>🛕 Famous Temples in India</h2>
      <table border="1" cellPadding="8" cellSpacing="0">  
        <thead>
          <tr>
            <th>ID</th>
            <th>Temple Name</th>
            <th>Location</th>
            <th>Deities</th>
          </tr>
        </thead>
        <tbody>
          {temples.map((temple) => (
            <tr key={temple.id}>
              <td>{temple.id}</td>
              <td>{temple.name}</td>
              <td>{temple.location}</td>
              <td>
                {/* Nested map to display list of deities */}
                {temple.deities.map((deity, index) => (
                  <div key={index}>• {deity}</div>
                ))}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

//  Inside the table body, loop through the temples array and for each temple return a table row”
//  or even more simply : “Repeat the following row for each temple in the list”
//  Python Analogy : for temple in temples: # create a table row for that temple
//  **    The .map() in React is basically doing that loop — but returns JSX instead of print statements.    **

export default TempleList;
