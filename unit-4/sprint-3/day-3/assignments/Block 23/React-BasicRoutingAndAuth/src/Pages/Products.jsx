import React, { useEffect, useState } from 'react'

export default function AllProducts() {
  let [pro,setPro]=useState([])

  let getpro=()=>{

    return fetch('https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products').then((res)=>res.json());

  };

  let getData=async()=>{
    let data=await getpro();
    setPro(data)

  };
  useEffect(()=>{
    getData()
  },[])

  console.log(pro)

 

  return (
    <div>
      <h2>All Products</h2>
      <div className = "products-wrapper" style={{display:'grid', gridTemplateColumns:'repeat(4,1fr)'}}>
          {/* Map the below div against product data */}
          {pro?.data?.map((ele)=>{
            return <div key={ele.id} style={{border:'1px solid red',margin:'5px',padding:'3px'}}>

            <h3 className = "name">{ele.title}</h3>
            <div className= "brand">{ele.brand}</div>
            <div className = "price">{ele.price}</div>
        </div>
          })}
            
      </div>
    </div>
  )
}