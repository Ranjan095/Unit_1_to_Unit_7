/** @format */

import React from "react";
import { CoinSingle } from "./CoinSingle";

export const CoinGecko = ({ data }) => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Coin</th>
            <th>Price</th>
            <th>24h Change</th>
            <th>Market Cap</th>
          </tr>
        </thead>
        <tbody>
          {data.map((ele,i)=>{
    return <CoinSingle key={ele.id} {...ele }/>
})}
        </tbody>
      </table>
    </div>
  );
};
