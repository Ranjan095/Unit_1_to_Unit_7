import "./App.css";
import Dashboard from "./Components/Dashboard/Dashboard";
import Form from "./Components/Form/Form";
import {Button} from '@chakra-ui/react'



function App() {

  // TODO: Remove below const and instead import them from chakra
  // const Button = () => <div />;

  return <div className="App">
  
      <Button width = "150px"className = "toggleForm" >
        Toggle Form  
      </Button><br></br><br></br>
      <Form/>
      <Dashboard />

  </div>;
}

export default App;
