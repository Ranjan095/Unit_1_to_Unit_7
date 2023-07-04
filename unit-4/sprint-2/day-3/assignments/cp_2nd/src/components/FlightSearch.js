import React, { useEffect, useState } from "react";
import SearchResults from "./SearchResults";


export const fetchData = async () => {


try {
    let res=await fetch(`https://6098f0d799011f001713fbf3.mockapi.io/techcurators/products/flights/1`);
    let abc=await res.json();
    return abc
   
} catch (error) {
    console.log(error)
}
  // make fetch request to the mentioned api and return the result here
};





function FlightSearch() {
    let [data,setData]=useState([])
    let [source,setSource]=useState('');
    let [destination,setDestination]=useState('');
    let [fill,setfill]=useState([])

    function sou(e){
        setSource(e.target.value)
        // console.log(e)
    
    }
    function dest(e){
       setDestination(e.target.value)
    //    console.log(destination)
    }

  // on page load fetch the data (useEffect)
  useEffect(()=>{
    async function mydata(){
        let data=await fetchData()
        setData(data)
    }
    mydata()
  },[])

  const handleSearch = () => {
    // filter the data based on source and destination
    // console.log(data)
    let searchData=data.filter((ele)=>ele.source==source&&ele.destination==destination)
    // searchData.map((ele)=><SearchResults arrival={ele.arrival} />)
//    searchData.map((ele)=>console.log(ele))
setfill(searchData)
setSource('')
setDestination('')
  };
  
  return (
    <div>
      <div></div>
      <div>
        <section>
          <h4>Flight Search</h4>
          <br />
          <input onChange={sou} value={source} data-testid="source-input" placeholder="Source" />
          <br /> <br />
          <input onChange={dest} value={destination} data-testid="destination-input" placeholder="Destination" />
          <br /> <br />
          <button onClick={handleSearch} data-testid="search-button">Search</button>
        </section>
      </div>
      {/* if there are search results pass it to SearchResults component else print No Flights found  */}
      <div data-testid="no-flights" className="">
        {fill.map((ele)=><SearchResults key={ele.id} price={ele.price} departure={ele.departure} arrival={ele.arrival} duration={ele.duration}/>)}
            {/* //No Flights Found  */}
            
            
          </div>
    </div>
  );
}

export default FlightSearch;
