/** @format */

import React, { useEffect, useState } from "react";
import axios from "axios";
import Poster from "./Poster";
import useDebounce from "../Hooks/useDebounce";
import useThrottle from "../Hooks/useThrottle";


const Dashbord = () => {
  let [data, setData] = useState([]);
  let [loading, setLoading] = useState(false);
  let [err, setErr] = useState(false);
  let [search, setSearch] = useState("");
  let [submit, setSubmit] = useState("batman");

///* Dbouncing is happning....*/
  let fun = () => {
    console.log("netWork request is maid");
    setSubmit(search);
  };
  let handleDbounce = useDebounce(fun, 1500);

// /*  Throttling is happning...*/
  let myFun=()=>{
    console.log("throttling is happning")
    setSubmit(search);
  }

  let handleThrottle=useThrottle(myFun,1500)

  let getData = () => {
    setLoading(true);
    axios
      .get(`https://www.omdbapi.com/?i=tt3896198&apikey=ad1487bb&s=${submit}`)
      .then((res) => {
        setData(res.data.Search);
        setLoading(false);
      })
      .catch((err) => {
        setErr(true);
      });
  };

  useEffect(() => {
    getData();
    // console.log(data)
  }, [submit]);

  let handleChange = (e) => {
    // console.log(e.target.value)
    setSearch(e.target.value);
  };

  return loading ? (
    <h1>Loading...</h1>
  ) : (
    <div>
      <h1>OMDB Movies</h1>
      <div
        style={{
          padding: "30px",
          width: "200px",
          margin: "auto",
          boxShadow:
            "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px",
        }}
      >
        <input
          onChange={handleChange}
          style={{ padding: "10px", width: "200px" }}
          placeholder="Movie name"
        ></input>
        <br></br>
        <br></br>
        <p>Dbounce in 1.5 second</p>
        {/* <button onClick={()=>setSubmit(search)}>Search</button> */}
        <button onClick={handleDbounce}>Debounce</button>
        <button onClick={handleThrottle}>Throttle</button>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3,1fr)",
          marginTop: "30px",
        }}
      >
        {data?.map((ele) => (
          <Poster key={Math.random()} {...ele} />
        ))}
      </div>
    </div>
  );
};

export default Dashbord;
