/** @format */

import axios from "axios";
import React, { useEffect, useState } from "react";
import { CoinGecko } from "../Components/CoinGecko";

export const Dashbord = () => {
  let [data, setData] = useState([]);
  let [search,setSearch]=useState('')

  useEffect(() => {
    axios
      .get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=INR`)
      .then((res) => {
        // console.log(res.data)
        setData(res?.data);
      });
  }, [search]);
  console.log(data[0])

  return (
    <div>
      <input onChange={(e)=>setSearch(e.target.value)} placeholder="Search..."/>
      <CoinGecko data={data} />
      
    </div>
  );
};
