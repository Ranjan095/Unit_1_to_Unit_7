/** @format */

// Note : import the the mentioned components from chakra UI and remove the follwoing once imported
import {
  Box,
  Button,
  Center,
  Img,
  SimpleGrid,
  Text,
  VStack,
  Select,
  Spinner,
} from "@chakra-ui/react";
import userEvent from "@testing-library/user-event";
import axios from "axios";
import { useReducer, useEffect, useState } from "react";

const initialState = {
  data: [],
  isLoading: false,
  error: null,
};

const reducer = (state, action) => {
  let { type, payload } = action;
  switch (type) {
    case "request":
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case "success":
      return {
        ...state,
        data: payload,
        isLoading: false,
        error: null,
      };
    case "failur":
      return {
        ...state,
        data: [],
        data: payload,
        isLoading: false,
        error: payload,
      };

      break;

    default:
      break;
  }
};

export default function Dashboard() {
  let [state, dispatch] = useReducer(reducer, initialState);
  let [sort, setSort] = useState("asc");
  let [fil, setFil] = useState("");

  let url = fil
    ? `http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/cats?breed=${fil}&_sort=cost&order=${sort}`
    : `http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/cats?_sort=cost&_order=${sort}`;

  let getData = () => {
    return axios.get(url);
  };

  let afterFetchData = () => {
    dispatch({ type: "request" });
    getData()
      .then((res) => {
        dispatch({ type: "success", payload: res?.data });
        // dispatch({type:'isLoading',payload:false})
      })
      .catch((err) => dispatch({ type: "failur", payload: err.massage }));
  };

  useEffect(() => {
    afterFetchData();
  }, [sort,fil]);

  let handleDelet = (id) => {
    return axios
      .delete(
        `http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/cats/${id}`
      )
      .then(() => {
        afterFetchData();
      });
  };

  return (
    <div>
      <div className="sortingButtons">
        <Button
          colorScheme={"green"}
          className="sortByCostAsc"
          isDisabled={sort == "asc"}
          onClick={() => setSort("asc")}
        >
          Sort by Asc
        </Button>
        <Button
          colorScheme={"red"}
          className="sortByCostDesc"
          isDisabled={sort == "desc"}
          onClick={() => setSort("desc")}
          m={2}
        >
          Sort by Desc
        </Button>
      </div>
      <Center>
        <Select
          placeholder="select option"
          onChange={(e) => setFil(e.target.value)}
        >
          <option value="Peterbald">Peterbald</option>
          <option value="Nebelung">Nebelung</option>
          <option value="Persian">Persian</option>
          <option value="Birman">Birman</option>
          <option value="Himalayan">Himalayan</option>
        </Select>
      </Center>

      {/* Map the below container against your data */}

      <Spinner disabled={!state.isLoading} />
      <SimpleGrid className="main_container" >
        {state?.data?.map((el) => {
          return (
            <Box className="catsDetails" key={el.id}>
              <Center>
                <Img src={el.image} />
              </Center>
              <VStack spacing={2} p={2}>
                <Text className="name" fontSize={"20px"} fontWeight="bold">
                  {el.name}
                </Text>
                <Text className="cost">{el.cost}</Text>
                <Text className="likes">{el.likes}</Text>
                <Text className="breed">{el.breed}</Text>
                <Text className="description">{el.description}</Text>
                <Button className="delete" onClick={() => handleDelet(el.id)}>
                  Delete
                </Button>
              </VStack>
            </Box>
          );
        })}
      </SimpleGrid>
    </div>
  );
}
