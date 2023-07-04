/** @format */

import { useState, useEffect } from "react";
import axios from "axios";

import {
  Button,
  Input,
  Table,
  TableContainer,
  Tbody,
  Th,
  Thead,
  Tr,
  Td,
} from "@chakra-ui/react";
export default function Dashboard() {
  let [search, setSearch] = useState("");
  let [product, setProduct] = useState([]);
  let [sorted, setSorted] = useState("");

  console.log(sorted);

  useEffect(() => {
    if (sorted) {
      if (sorted == "asc") {
        setProduct([...product].sort((a, b) => a.rent - b.rent));
      } else if (sorted == "desc") {
        setProduct([...product].sort((a, b) => b.rent - a.rent));
      }
    }
  }, [sorted]);

  // let handleASC = () => {
  //   let asce = product.sort((a, b) => a.rent - b.rent);
  //   setProduct(asce);
  //   console.log(product);
  // };

  // let handleDESC = () => {
  //   let desce = product.sort((a, b) => b.rent - a.rent);
  //   setProduct(desce);
  //   console.log(product);
  // };

  let url = search
    ? `http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/houses?q=${search}`
    : `http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/houses`;

  let getData = () => {
    return axios.get(url);
  };

  let afterFetchAndUpdatedData = () => {
    getData().then((res) => {
      setProduct(res?.data);
    });
  };

  useEffect(() => {
    afterFetchAndUpdatedData();
  }, [search]);
  // console.log(product);

  let handleDelete = (id) => {
    axios
      .delete(
        `http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/houses/${id}`
      )
      .then(() => {
        afterFetchAndUpdatedData();
      });
  };

  return (
    <div>
      <div className="sortingButtons">
        <Button className="sortByRentAsc" onClick={() => setSorted("asc")}>
          {" "}
          Sort by Asc{" "}
        </Button>
        <Button className="sortByRentDesc" onClick={() => setSorted("desc")}>
          {" "}
          Sort by Desc{" "}
        </Button>
      </div>

      <Input
        className="searchAddress"
        placeholder="Search Data"
        onChange={(e) => setSearch(e.target.value)}
      />

      <TableContainer>
        <Table className="table">
          <Thead>
            <Tr>
              <Th>Name</Th>
              <Th>Owner's Name</Th>
              <Th>Address</Th>
              <Th>Area Code</Th>
              <Th>Rent</Th>
              <Th>Bachelor Tenants Allowed</Th>
              <Th>Married Tenants Allowed</Th>
            </Tr>
          </Thead>
          <Tbody>
            {/* Map the below container against your data */}
            {product.map((item, i) => {
              return (
                <Tr key={i + 1} className="houseDetails">
                  <Td className="name">{item.name}</Td>
                  <Td className="ownersName">{item.ownerName}</Td>
                  <Td className="address">{item.address}</Td>
                  <Td className="areaCode">{item.areaCode}</Td>
                  <Td className="rent">{item.rent}</Td>
                  <Td className="isBachelorAllowed">
                    {item.bachelor ? "Yes" : "No"}
                  </Td>
                  <Td className="isMarriedAllowed">
                    {item.married ? "Yes" : "No"}
                  </Td>
                  <Td className="delete" onClick={() => handleDelete(item.id)}>
                    {" "}
                    Delete{" "}
                  </Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>
    </div>
  );
}
