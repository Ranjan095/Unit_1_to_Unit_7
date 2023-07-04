import axios from "axios";
import React, { useState } from "react";
import { Navbar } from "../Components/Navbar";

interface form {
  name: string;
  brand: string;
  price: number;
  image: string;
  like: number;
  dislike: number;
}
const obj: form = {
  name: "",
  brand: "",
  price: 0,
  image: "",
  like: 0,
  dislike: 0,
};
export const AddProduct = () => {
  const [form, setform] = useState(obj);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setform({ ...form, [name]: value });
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    axios
      .post(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/products`, form)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    setform(obj);
  };
  return (
    <div>
      <div>
        <h3 data-testid="page-name">Add Product Page</h3>
      </div>
      <Navbar />
      <form onSubmit={handleSubmit}>
        <input
          name={"name"}
          type="text"
          className={"product-name"}
          value={form.name}
          onChange={handleChange}
        />
        <input
          name={"image"}
          type="text"
          className={"product-image"}
          value={form.image}
          onChange={handleChange}
        />
        <input
          name={"brand"}
          type="text"
          className={"product-brand"}
          value={form.brand}
          onChange={handleChange}
        />
        <input
          name={"price"}
          type="text"
          className={"product-price"}
          value={form.price}
          onChange={handleChange}
        />
        <input type="submit" className={"submit-form"} value={"Add Todo"} />
      </form>
    </div>
  );
};
