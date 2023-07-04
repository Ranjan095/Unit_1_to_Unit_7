/** @format */

import React, { useState } from "react";
import { Dashboard } from "./Dashboard";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthContextProvider";

let obj = {
  email: "",
  password: "",
};

export default function Login() {
  let [temp, setTemp] = useState(obj);

  let { isAuth, setIsAuth, token, setToken } = useContext(AuthContext);

  let handleChange = (e) => {
    setTemp({ ...temp, [e.target.name]: e.target.value });
  };

  let handlSubmit = (e) => {
    e.preventDefault();

     fetch("https://reqres.in/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(temp),
    })
      .then((ele) => ele.json())
      .then((data) => {
        let myToken = data?.token; // it gives token with wrong pasword as well while double click
        setToken(myToken);
        setIsAuth(true);
      }).catch((err)=>console.log(err))
  };

  return (
    <div>
      <form data-testid="auth_form" onSubmit={handlSubmit}>
        <input
          type="email"
          data-testid="email"
          placeholder="Enter Email"
          name="email"
          onChange={handleChange}
        />

        <br />
        <input
          type="password"
          data-testid="password"
          placeholder="Enter password"
          name="password"
          onChange={handleChange}
        />
        <br />
        <input type="submit" />
      </form>
      {isAuth && <Dashboard />}
    </div>
  );
}
