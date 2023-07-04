/** @format */

import React from "react";
import { useNavigate, useParams } from "react-router-dom";

export const CoinSingle = ({
  id,
  image,
  market_cap,
  symbol,
  current_price,
  market_cap_change_percentage_24h,
}) => {
let navigate=useNavigate()
let handleClick=(id)=>{
    // console.log(id)
    navigate(id)
    
}

  return (
    <tr onClick={()=>handleClick(id)}>
      <td>
        <div>
          <div style={{ display: "flex", gap: "10px" }}>
            <img style={{ width: "50px" }} src={image} />
            <div>
              <h3>{symbol}</h3>
              <p>{id}</p>
            </div>
          </div>
        </div>
      </td>
      <td>₹ {current_price}</td>
      <td>{market_cap_change_percentage_24h}%</td>
      <td>₹ {market_cap}</td>
    </tr>
  );
};
