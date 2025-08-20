const Grocery = ({ items }) => { //functional comp prop given
  const handleAddToCart = () => { // alert func
    alert("Groceries Added to Cart!");
  };

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h2>Groceries List:</h2>
      <ul style={{ listStyle: "disc", paddingLeft: "40px", textAlign: "left", display: "inline-block" }}>
        {items.map((item, index) => (       //items array
          <li key={index}>{item}</li>
        ))}
      </ul>
    
      <br/>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};

export default Grocery;