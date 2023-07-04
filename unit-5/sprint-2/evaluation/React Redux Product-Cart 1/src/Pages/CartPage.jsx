/** @format */

import { useSelector } from "react-redux";

export const CartPage = () => {

let pro=useSelector((store)=>store.cartReducer.cart)
console.log(pro)

  return pro.length==0 ? <h1>No Product incart</h1> : <div data-testid="cart-list">
    {pro.map((ele)=>{
      return <div key={ele.id}>
        <img src={ele.images[0]} alt="" />
        <p>{ele.brand}</p>
        <p>{ele.category}</p>
      </div>
    })}
    {/* Map through cart store  */}
    </div>;
};
