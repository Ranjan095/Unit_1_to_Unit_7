import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRestaurantData } from "../Redux/AppReducer/action";


export default function RestaurantData() {

let dispatch=useDispatch()

let store=useSelector((store)=>store.restaurantData
)
console.log(store)

	useEffect(()=>{
		dispatch(getRestaurantData)
	},[])

	

	return (
		<div>
			<h2> Restaurant Data </h2>
			<div className="restaurant_data_cont">
				{/* Map the below div against your restaurant Data */}
				{store.map((ele)=>{
				return <div key={ele.id} className="restaurant_item"  >
					<img className="image" alt="img" width="70%" src={ele.image}/>
					<div className="name"> {ele.name}</div>
					<div className="type">{ele.type} </div>
					<div className="rating"> {ele.rating}</div>
					<div className="number_of_votes">{ele.number_of_votes} </div>
				</div>
				})}
			</div>
		</div>
	);
}
