/** @format */

import "./App.css";
import data from "./db.json";
import { useEffect, useState } from "react";
import Product from "./components/Product";
function App() {
  let [pro, setPro] = useState([]);

  useEffect(() => {
  setPro(data)
  }, []);

  let handleQty = (id, val) => {
    let updatedData = pro.map((ele) =>
      ele.id == id ? { ...ele, quantity: ele.quantity + val } : ele
    );
    // console.log('line 22',updatedData)
    setPro(updatedData);
  };
let total=0;
  pro.map((ele)=>{
    total+=(ele.price*ele.quantity);
   
  })
  console.log(total)

  console.log(pro);
  return (
    <div
      className="App"
      data-testid="app"
      style={{ border: "2px solid red", alignItems: "center" }}
    >
      <div data-testid="cart-products">
        {pro.map((ele) => (
          <Product
            handleQty={handleQty}
            key={ele.id}
            id={ele.id}
            name={ele.name}
            price={ele.price}
            quantity={ele.quantity}
          />
        ))}
        {/*  map through the  data and pass props to the Product component */}
      </div>

      <h1 id="total-cart" data-testid="total-cart">
        {" "}
        Total:{total}
        {/* Show the total of the Cart(a actual Price of a Product = price * quantity) */}
      </h1>
    </div>
  );
}

export default App;
