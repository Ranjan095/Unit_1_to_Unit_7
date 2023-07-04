import {useState,useEffect} from 'react';


import {
  Button,
  Input,
  TableContainer,
  Table,
  Thead,
  Tr,
  Th,
  Td,
  Tbody
} from '@chakra-ui/react'

function getData(ord){
 return fetch(`http://localhost:8080/houses?_sort=rent&_order=${ord}`)
.then((e)=>e.json())

}

export default function Dashboard() {
let [state,setState]=useState([])
let [order,setOrder]=useState('asc')


useEffect(()=>{
  getData(order).then((data)=>setState(data))
  // console.log(order)
},[order])
// console.log(state)



  return (
    <div>
        <div className="sortingButtons">
          <Button className = "sortByRentAsc" onClick={()=>setOrder('desc')}>  Sort by Asc </Button>
          <Button className = "sortByRentDesc" onClick={()=>setOrder('asc')}> Sort by Desc </Button>
        </div>

        <Input className = "searchAddress"  placeholder = "Search Data" />


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
              {state.map((ele)=>(
               <Tr className = "houseDetails" key={ele.id} >
               <Td className = "name" >{ele.name}</Td>
               <Td className = "ownersName" >{ele.ownerName}</Td>
               <Td className = "address" >{ele.address}</Td>
               <Td className = "areaCode" >{ele.areaCode}</Td>
               <Td className = "rent" >{ele.rent}</Td>
               <Td className = "isBachelorAllowed" >{ele.isBachelorAllowed?'Yes':'No'}</Td>
               <Td className = "isMarriedAllowed" >{ele.isMarriedAllowed?'Yes':'No'}</Td>
               <Td className = "delete" > Delete </Td>
           </Tr>
              ))}
              {/* <Tr className = "houseDetails"  >
                  <Td className = "name" ></Td>
                  <Td className = "ownersName" ></Td>
                  <Td className = "address" ></Td>
                  <Td className = "areaCode" ></Td>
                  <Td className = "rent" ></Td>
                  <Td className = "isBachelorAllowed" ></Td>
                  <Td className = "isMarriedAllowed" ></Td>
                  <Td className = "delete" > Delete </Td>
              </Tr> */}
            </Tbody>
          </Table>
        </TableContainer>
    </div>
  )
}
