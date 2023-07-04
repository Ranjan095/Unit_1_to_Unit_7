import axios, { AxiosResponse } from "axios";
interface productData {
  name: string;
  brand: string;
  price: number;
  image: string;
  like: number;
  dislike: number;
  id: number;
}


export const addProduct = () => {
  // Add product functionality here
};

export const getProducts = async() => {
  // Get products functionality
  const res = await axios.get(
    `http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/products`
  );
  return res.data
};

export const updateLike = () => {
  // Update like functionality
};

export const updateDisLike = () => {
  // Update dislike functionality
};

export const deleteProduct = () => {
  // Delete functionality
};
