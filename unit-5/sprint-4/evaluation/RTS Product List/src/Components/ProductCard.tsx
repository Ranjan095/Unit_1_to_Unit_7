import axios from "axios";
import React, { useState } from "react";

interface productCardProps {
  name: string;
  brand: string;
  price: number;
  image: string;
  like: number;
  dislike: number;
  id: number;
}
export const ProductCard = ({
  name,
  brand,
  price,
  image,
  like,
  dislike,
  id,
}: productCardProps) => {
  const [value, setvalue] = useState(0);

  const changehandler = (val: number) => {
   console.log(val)
    
  };
const handleDelete=(id:number)=>{
  console.log(id)
}

  return (
    <div className={`product-card`}>
      <img src={image} alt={name} className={"product-image"} width={"100%"} />
      <h1 className="product-name">{name}</h1>
      <p className="product-price">{price}</p>
      <p className="product-brand">{brand}</p>
      <button className="product-like-button" onClick={(e) => changehandler(1)}>
        like
      </button>
      <p className="product-like">{like}</p>
      <button
        className="data-testid=dislike-button"
        onClick={(e) => changehandler(-1)}>
        dislike
      </button>
      <p className="product-dislike">{dislike}</p>
      <button
        className="data-testid=delete-button"
        onClick={(e) =>handleDelete(id)}>
        delete
      </button>
    </div>
  );
};
