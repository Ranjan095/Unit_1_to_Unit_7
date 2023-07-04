/** @format */

import { useEffect, useState } from "react";
import LoadingIndicator from "./LoadingIndicator";
import RestaurantCard from "./RestaurantCard";
import Pagination from "./Pagination";

function Restaurants() {
  let [loading, setLoading] = useState(false);
  let [data, setData] = useState([]);
  let [totalPage, setTotalPage] = useState(0);
  let [page, setPage] = useState(1);

  // let handleChange=(val)=>{
  //   setPage(val)
  // }
  // console.log(page);

  let getData = (page) => {
    return fetch(
      `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/getrestaurants?limit=10&page=${page}`
    ).then((ele) => ele.json());
  };

  async function fetchData(page) {
    try {
      setLoading(true);
      let data = await getData(page);
      setData(data.data);
      setTotalPage(data.totalPages);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchData(page);
  }, [page]);

  // console.log(tota lPage);

  if (loading) {
    return (
      <h1>
        <LoadingIndicator />
      </h1>
    );
  }

  return (
    <div>
      <h1 data-testid="restaurants-header">Restaurants List</h1>
      <div
        data-testid="restaurants-container"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4,1fr)",
          gap: "7px",
        }}
      >
        {/* Restaurant Card */}

        {data?.map((ele) => (
          <RestaurantCard
            key={ele.id}
            name={ele.name}
            type={ele.type}
            image={ele.image}
            rating={ele.rating}
            price_starts_from={ele.price_starts_from}
            number_of_votes={ele.number_of_votes}
          />
        ))}
      </div>
      <div>
        {/* Pagination Component */}

        <Pagination
          total={totalPage}
          onChange={(val) => setPage(val)}
          current={page}
        />
      </div>
    </div>
  );
}

export default Restaurants;

//current,onChange,total
