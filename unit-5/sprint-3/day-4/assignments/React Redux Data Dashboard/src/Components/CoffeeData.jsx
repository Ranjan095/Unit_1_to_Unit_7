import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getcoffeeData } from '../Redux/AppReducer/action'

export default function CoffeeData() {

  let dispatch=useDispatch()

  let coffeeData=useSelector((store)=>store.coffeeData);
  console.log(coffeeData)

  useEffect(()=>{
    dispatch(getcoffeeData)
    
  },[])
  
  
  return (
   <div>
     <h2 >Coffee Data</h2>
      <div className = "coffee_data_cont" >
        {coffeeData.map((ele)=>{
        {/* map the below div against your coffee data */}
        return <div key={ele.id} className = "coffee-item" >
          <img className = "image" alt = "img" width = "70%" src={ele.image}/>
          <div className = "title">{ele.title} </div>
          <div className = "price">{ele.price} </div>
        </div>
        })}
    </div>
   </div>
   
  )
}