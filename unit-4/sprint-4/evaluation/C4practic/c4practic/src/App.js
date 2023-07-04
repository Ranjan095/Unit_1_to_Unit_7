/** @format */

import "./App.css";
import { useState } from "react";
import Dashboard from "./Components/Dashboard/Dashboard";
import Form from "./Components/Form/Form";
import { Button } from "@chakra-ui/react";
function App() {
  let [state, setState] = useState(false);
  // console.log(state)

  // TODO: Remove below const and instead import them from chakra
  // const Button = () => <div />;

  return (
    <div className="App">
      <Button
        onClick={() => setState(!state)}
        width="150px"
        className="toggleForm"
      >
        Toggle Form
      </Button>
      {state ? <Form /> : <Dashboard />}
    </div>
  );
}

export default App;
