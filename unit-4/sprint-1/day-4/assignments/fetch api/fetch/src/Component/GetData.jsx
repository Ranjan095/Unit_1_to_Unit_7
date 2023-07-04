
import { useEffect } from "react";
import { useState } from "react";

export default function GetData() {
let [text,setText]=useState([])
const [val,setval]=useState(false)
const handle1=()=>{
    setval(!val)
}
const getList=async()=>{
    try {
		let res = await fetch("https://jsonplaceholder.typicode.com/posts");
		let data = await res.json();
		setText(data);
        console.log(data)
	} catch (error) {
        console.log('wrong in fetch')
    }
}
useEffect(()=>{
getList()
},[])
return(
    <>
    <button onClick={handle1}>FETCH</button>
    {
        val&&text.map(e=>
        <li key={e.id}>{e.title}
         <button>Delete</button></li>)
    }
    </>
)	
    
}
