import "./App.css";
import Form from "./Components/Form/Form";
import Dashboard from "./Components/Dashboard/Dashboard";
import { useState } from 'react'
import { Stack, Center, Button, } from '@chakra-ui/react'

function App() {
let [toggle,setToggle]=useState(false);

// console.log(toggle)

  return (
    <Stack p={5} className="App">
      <Center>
        <Button width="150px" className="toggleForm" onClick={()=>setToggle(!toggle)}>Show Add Cats Page</Button>
      </Center>

      {!toggle ? <Dashboard/>:<Form/>}

      {/* toggle between form and dashboard */}
    </Stack>
  );
}

export default App;
