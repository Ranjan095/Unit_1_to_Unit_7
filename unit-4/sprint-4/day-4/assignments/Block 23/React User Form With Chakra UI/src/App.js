/** @format */

import { useState, useReducer } from "react";
import { UserRow } from "./Component/UserRow";
import "./App.css";
import {
  Box,
  Button,
  Center,
  Checkbox,
  FormControl,
  Heading,
  FormLabel,
  Input,
  Select,
  TableContainer,
  Switch,
  Tbody,
  Table,
  Thead,
  Tr,
  Th,
} from "@chakra-ui/react";

const initialState = {
  name: "",
  gender: "Male",
  role: "FrontEnd Developer",
  maritalStatus: false,
};

//should have the cases "name", "gender", "role", "maritalStatus", and "reset" along with the default cases
const reducer = (state, action) => {
  let { type, payload } = action;
  switch (type) {
    case "name": {
      return { ...state, name: payload };
    }
    case "gender": {
      return { ...state, gender: payload };
    }
    case "role": {
      return { ...state, role: payload };
    }
    case "maritalStatus": {
      return { ...state, maritalStatus: payload };
    }
    case "reset": {
      return (state = initialState);
    }

    default: {
      return state;
    }
  }
};

function App() {
  // import and use the useReducer hook here, with the reducer function and the initialState.

  let [state, dispatch] = useReducer(reducer, initialState);
  //store the data in this object variable when you click on the submit button, to render, the data in the UI.
  const [submittedData, setSubmittedData] = useState([]);

  let handleChange = (e) => {
    // console.log(e.target.checked)
    let val = e.target.type === "checkbox" ? e.target.checked : e.target.value;
    let name = e.target.name;
    dispatch({ type: name, payload: val });
    // console.log(val)
  };
  let handleSubmit = (e) => {
    e.preventDefault();
    // console.log(state);
    setSubmittedData([...submittedData, state]);
    reset();
  };

  let reset = () => {
    dispatch({ type: "reset" });
  };

  // console.log(submittedData)

  return (
    <div className="App">
      <Heading as="h1">Login Form</Heading>
      <Box>
        <form data-testid="form-element" onSubmit={handleSubmit}>
          <FormControl>
            <FormLabel>Name</FormLabel>

            <Input
              type="text"
              name="name"
              placeholder="Name"
              onChange={handleChange}
              value={state.name}
            />
            <FormLabel>gender</FormLabel>
            <Select
              name="gender"
              data-testid="gender-select"
              onChange={handleChange}
              value={state.gender}
            >
              <option>Male</option>
              <option>Female</option>
              <option>Prefer Not to Say</option>
            </Select>
            <FormLabel>role</FormLabel>
            <Select
              name="role"
              data-testid="role-select"
              onChange={handleChange}
              value={state.role}
            >
              <option>FrontEnd Developer</option>
              <option>BackEnd Developer</option>
              <option>FullStack Developer</option>
            </Select>

            <Checkbox
              name="maritalStatus"
              type="checkbox"
              onChange={handleChange}
              isChecked={state.maritalStatus}
            >
              Married
            </Checkbox>
            <Center>
              <Button variant="solid" type="submit">
                SUBMIT
              </Button>
            </Center>
          </FormControl>
        </form>
      </Box>

      {/* map through the submittedData and render UserRow component to display the data in tabular format ELSE print "no users found"  in there is no user data */}
      {submittedData.length == 0 ? (
        <Heading data-testid="no-user-container">no users found</Heading>
      ) : (
        <TableContainer>
          <Table>
            <Thead>
              <Tr>
                <Th>S.NO</Th>
                <Th>USER</Th>
                <Th>GENDER</Th>
                <Th>ROLE</Th>
                <Th>MARITALSTATUS</Th>
              </Tr>
            </Thead>
            <Tbody>
              {submittedData.map((ele, i) => (
                <UserRow key={i + 1} id={i + 1} {...ele} />
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      )}
    </div>
  );
}

// DO NOT change/modify the exports
export default App;
export { reducer, initialState };


