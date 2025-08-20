import React from "react";
import Grocery from "./Grocery";
import Car from "./Car";
import Phone from "./Phone";
import SweetsList from "./SweetsList";
import Electronics from "./Electronics";
import CanteenMenu from "./CanteenMenu";
import JuiceList from "./JuiceList";
import Restaurant from "./Restaurant";
import TempleList from "./TempleList";

function App() {
  const groceryItems = ["Milk", "Eggs", "Bread", "Rice", "Vegetables"];

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "20px",
        marginTop: "30px",
      }}
    >
      <Grocery items={groceryItems} />
      <Car brand="Toyota" model="Fortuner" color="Black" year="2022" />
      <Phone />
      <SweetsList />
      <Electronics />
      <CanteenMenu />
      <JuiceList />
      <Restaurant />
      <TempleList />

      {/* ✅ Last component – Tailoring Shop */}
      
    </div>
  );
}

export default App;
