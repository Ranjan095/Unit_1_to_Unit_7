import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getemployeeData } from "../Redux/AppReducer/action";

export default function EmployeeData() {

	let dispatch=useDispatch()

	let employeeData=useSelector((store)=>store.employeeData)
	console.log(employeeData)

	useEffect(()=>{
		dispatch(getemployeeData)
	},[])
	

	return (
		<div>
			<h2>Employee Data</h2>
			<div className="employee_data_cont">
				{/* Map the below div against yoru employee data */}
				{employeeData.map((ele)=>{
				return <div key={ele.id} className="employee" style={{ width: "250px" }}>
					<img className="image" alt="img" width="70%" src={ele.image}/>
					<div className="name">{ele.name} </div>
					<div className="gender"> {ele.gender}</div>
					<div className="department">{ele.department} </div>
				</div>
				})}
			</div>
		</div>
	);
}
