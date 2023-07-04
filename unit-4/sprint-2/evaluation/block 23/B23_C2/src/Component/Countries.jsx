import { useEffect, useState, useSyncExternalStore } from "react";
import CountriesCard from "./CountriesCard";
import LoadingIndicator from "./LoadingIndicator";
import Pagination from "./Pagination";

function Countries() { 
let [data,setData]=useState([]);
let [page,setPage]=useState(1);
let [loding,setLoading]=useState(false);

let getData=(page)=>{
  return fetch(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-countries?page=${page}&limit=10`)
  .then((res)=>res.json())
}

let myData=async(page)=>{
  setLoading(true);
  let data=await getData(page)
  setData(data)
  setLoading(false)

}
useEffect(()=>{
myData(page)
},[page])

// console.log(data.totalPages)




  // return <LoadingIndicator />;
  return loding? <h1><LoadingIndicator/></h1> : (
    <div>
      <h1 data-testid="countries-header">Countries List</h1>
      <div data-testid="countries-container">
        {/* Countries Card */}
        {data?.data?.map((ele)=> <CountriesCard key={ele.id} country={ele.country} population={ele.population}/>)}
      </div>
      <div>
        {/* Pagination */}
        
        <Pagination total={data.totalPages} current={page} onChange={(val)=>setPage(page+val)}/>
        
      </div>
    </div>
  );
}

export default Countries;
