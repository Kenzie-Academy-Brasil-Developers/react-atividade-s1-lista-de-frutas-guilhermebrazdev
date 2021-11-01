import { useState } from "react";

import "./App.css";
import "./style.css";

function App() {
  const [fruits, setFruits] = useState([
    { name: "banana", color: "yellow", price: 2 },
    { name: "cherry", color: "red", price: 3 },
    { name: "strawberry", color: "red", price: 4 },
  ]);

  // const itemName = fruits.map((fruits) => {
  //   return fruits.name;
  // });

  const list = fruits.map((fruits) => {
    return <li>{fruits.name}</li>;
  });

  function filterRedFruits() {
    const redFruits = fruits.filter((fruits) => {
      return fruits.color === "red";
    });
    setFruits(redFruits);
  }

  const totalPrice = fruits.reduce((previousValue, currentValue) => {
    return currentValue.price + previousValue;
  }, 0);

  return (
    <div className="App">
      <header className="App-header">
        <span id="price">Total Price = {totalPrice}</span>
        <span>
          <ul>{list}</ul>
        </span>
        <button onClick={filterRedFruits} id="botao">
          Frutas vermelhas?
        </button>
      </header>
    </div>
  );
}

export default App;
