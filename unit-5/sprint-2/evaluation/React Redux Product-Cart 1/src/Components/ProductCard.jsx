/** @format */

import { useDispatch } from "react-redux";
import { addToCart } from "../Redux/CartReducer/action";

export const ProductCard = ({
  brand,
  discountPercentage,
  id,
  price,
  title,
  images,
  
}) => {

  let dispatch=useDispatch()

  let handleAddToCart=(id)=>{
    // console.log(id)
    dispatch(addToCart(id))
  }

// console.log(images)

  return (
    <div className="product-card">
      <img className="product-image" src={images[0]}/>
      <p className="product-title">{title}</p>
      <p className="product-brand">{brand}</p>
      <p className="product-price">{price}</p>
      <p className="product-discount">{discountPercentage}</p>
      <button onClick={()=>handleAddToCart(id)} className="add-to-cart">add to cart</button>
      {/* - Every product card will have a `add to cart` button with class `add-to-cart`
       - Show image in image tag with class `product-image` 
       - Show title with class `product-title` 
       - Show brand in p tag with class `product-brand` 
       - Show price in p tag with class `product-price` 
       - Show discount in p tag with class `product-discount` 
       * Do not add any extra text, only response values should be present * 
       * For example `Title:"iPhone"` or `Discount: 10.5%` will not work * */}
    </div>
  );
};
