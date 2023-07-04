import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export const SinglePage = () => {
    let [data,setData]=useState({})

let id=useParams();
let coin= id.userId;

useEffect(()=>{
    axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=INR`).then((res)=>{
    //    console.log(res.data)
      let singleData=res?.data.filter((ele)=>ele.id==coin)
      console.log(singleData)
      setData(singleData[0])
    })
},[])

  return (
    <div>
        <img style={{width:'100px'}} src={data.image} alt="" />
        <h4>Market Cap Rank : {data.market_cap_rank}</h4>
        <h4>Symbol : {data.symbol}</h4>
        <h4>Current Price : ₹ {data.current_price}</h4>
        <h4>Price Change 24 Hour : ₹ {data.price_change_24h}</h4>
        <h4>Total Volume : {data.total_volume}</h4>
        <h4>Low 24 hour : ₹ {data.low_24h}</h4>
        <h4>High 24 Hour : ₹ {data.high_24h}</h4>
        <h4>Total Supply : {data.total_supply}</h4>
        <h4>Max Supply : {data.max_supply}</h4>
        <h4>Circulating Supply : {data.circulating_supply}</h4>
        <h4>All Time High (ath) : {data.ath}</h4>
        <h4>Last Updated Date : {data.last_updated}</h4>
      

    </div>
  )
}
