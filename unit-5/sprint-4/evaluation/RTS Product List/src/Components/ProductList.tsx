import axios from "axios";
import React, { useState, useEffect } from "react";
import { ProductCard } from "./ProductCard";
import { getProducts } from "../api";
interface interFacePro {
  name: string;
  brand: string;
  price: number;
  image: string;
  like: number;
  dislike: number;
  id: number;
}
const ProductList = () => {
  const [products, setProducts] = useState<interFacePro[]>([]);


  useEffect(() => {
    getProducts().then((res)=>{
      setProducts(res)
    })
  }, [products.length]);
  return (
    <>
      <h3 data-testid="page-name">Home Page</h3>
      <div
        className={`product-list`}
        style={{ display: "grid", gridTemplateColumns: "repeat(5,1fr)" }}>
        {products?.length > 0 &&
          products.map((item, key) => {
            return <ProductCard key={key} {...item} />;
          })}
      </div>
    </>
  );
};

export default ProductList;
