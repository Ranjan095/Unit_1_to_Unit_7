/** @format */

import logo from "./logo.svg";
import "./App.css";
import { Heading } from "@chakra-ui/react";
import { AllRoutes } from "./Components/AllRoutes";
import NavBar from "./Components/NavBar";

function App() {
  return (
    <div>
      <NavBar />
      <AllRoutes />
    </div>
  );
}

export default App;
