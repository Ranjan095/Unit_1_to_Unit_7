import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Routes,Route } from "react-router-dom";
import Home from "./Links/Home";
import Contact from "./Links/Contact";
import { About } from "./Links/About";
import Login from "./Links/Login";
import Service from "./Links/Service";
import NavBar from "./Components/Navbar/Navbar";


function App() {
  return <BrowserRouter>
<NavBar/>
  <Routes>
    <Route path="/" element={<Home/>}></Route>
    <Route path="/contact" element={<Contact/>}></Route>
    <Route path="/about-us" element={<About/>}></Route>
    <Route path="/services" element={<Service/>}></Route>
    <Route path="/login" element={<Login/>}></Route>
  </Routes>
  </BrowserRouter>;
}

export default App;
