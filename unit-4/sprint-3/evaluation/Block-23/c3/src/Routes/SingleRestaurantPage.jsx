import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


function SingleRestaurantPage() {
  let [data,setData]=useState({})
  let [loading,setLoading]=useState(false)
let param=useParams();
let val=+param.id;
// console.log(typeof val)


let myData=(val)=>{
  setLoading(true)
  fetch(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/getrestaurants/${val}`)
  .then((res)=>res.json())
  .then((data)=>{
    setData(data?.data)
    setLoading(false)
  })
}

useEffect(()=>{
  myData(val)
},[])
console.log(data)



  return loading? <h1>Loading...</h1>:(
    <div data-testid="restaurant-container">
      <div>
        <h3 data-testid="restaurant-name">{data.name}</h3>
      </div>
      <div data-testid="restaurant-type">Type:{data.type}</div>
      <div data-testid="restaurant-rating">Rating:{data.rating}</div>
      <div data-testid="restaurant-votes">Votes:{data.number_of_votes}</div>
      <div data-testid="restaurant-price">Starting Price:{data.price_starts_from}</div>
      <div>
        <img data-testid="restaurant-image" width={"100px"} src={data.image} alt={data.name}/>
      </div>
    </div>
  );
}
export default SingleRestaurantPage;
