import { Sidebar } from "../Components/Sidebar";
import styled from "styled-components";
import { ProductList } from "../Components/ProductList";
import { useEffect } from "react";
// import { getData } from "../Redux/ProductReducer/action";
import { getProducts } from "../Redux/ProductReducer/action";
import { useDispatch, useSelector } from "react-redux";

export const Homepage = () => {

  let dispatch=useDispatch()

useEffect(()=>{
  // getData(dispatch)
  dispatch(getProducts)
},[])

let {isError,isLoading,products}=useSelector((store)=>store.productReducer)
console.log(products)
  
  return (
    <DIV>
      
      <Sidebar />
      <ProductList products={products} />
    </DIV>
  );
};

const DIV = styled.div`
  display: flex;
  gap: 10px;
`;
