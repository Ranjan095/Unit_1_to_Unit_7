/** @format */

import axios from "axios";
import React, { useState } from "react";

const obj = {
  name: "",
  email: "",
  password: "",
  gender:""
  
};

export const Signup = () => {
  const [formData, setFormData] = useState(obj);

  const handleChange = (e) => {
    const { name, value } = e.target;
    // console.log(name,value)
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();


    axios
      .post(`https://easy-blue-sheep-sari.cyclic.app/users/register`, formData)
      .then((res) => console.log(res.data))
      .catch((err)=>console.log(err))

    

    console.log(formData);
    setFormData(obj);
  };

  return (
    <div>
      <h1>Signup page</h1>

      <form onSubmit={handleSubmit}>
        Name:{" "}
        <input
          name="name"
          onChange={handleChange}
          value={formData.name}
          type="text"
          placeholder="enter your name"
        />
        <br />
        <br />
        Email:{" "}
        <input
          name="email"
          onChange={handleChange}
          value={formData.email}
          type="text"
          placeholder="enter your email"
        />
        <br />
        <br />
        Password:{" "}
        <input
          name="password"
          onChange={handleChange}
          value={formData.password}
          type="text"
          placeholder="enter your password"
        />
        <br />
        <br />
        gender:{" "}
        <input
          name="gender"
          onChange={handleChange}
          value={formData.gender}
          type="text"
          placeholder="enter your gender"
        />
        <br />
        <br />
        <input type="submit" />
      </form>
    </div>
  );
};
