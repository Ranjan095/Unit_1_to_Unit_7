/** @format */

import React, { useEffect, useState } from "react";
import SearchResults from "./SearchResults";

export const fetchData = async () => {
  // make fetch request to the mentioned api and return the result here
  try {
    let resp = await fetch(
      `https://6098f0d799011f001713fbf3.mockapi.io/techcurators/products/flights/1`
    ).then((res) => res.json());
    return resp;
    // console.log(resp)
  } catch (error) {}
};

function FlightSearch() {
  let [data, setData] = useState([]);
  let [source, setSource] = useState("");
  let [destination, setDestination] = useState("");
  let [newData, setNewData] = useState([]);

  // on page load fetch the data (useEffect)
  useEffect(() => {
    (async () => {
      let data = await fetchData();
      setData(data);
    })();
  }, []);
  // console.log(data)

  const handleSearch = () => {
    // filter the data based on source and destination
    let searchdData = data?.filter(
      (ele) => ele.source == source && ele.destination == destination
    );
    setNewData(searchdData);

    setSource("");
    setDestination("");
  };
  console.log(newData);
  return (
    <div>
      <div></div>
      <div>
        <section>
          <h4>Flight Search</h4>
          <br />
          <input
            data-testid="source-input"
            placeholder="Source"
            value={source}
            onChange={(e) => setSource(e.target.value)}
          />
          <br /> <br />
          <input
            data-testid="destination-input"
            placeholder="Destination"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
          />
          <br /> <br />
          <button data-testid="search-button" onClick={handleSearch}>
            Search
          </button>
        </section>
      </div>


{newData.length>0?<SearchResults newData={newData}/>:<div data-testid="no-flights" className="">
        No Flights Found
      </div>}

      {/* if there are search results pass it to SearchResults component else print No Flights found  */}
      
    </div>
  );
}

export default FlightSearch;
