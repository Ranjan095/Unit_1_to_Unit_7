import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Context/AuthContext";
import RestaurantTable from "../Components/RestaurantTable";
import Pagination from "../Components/Pagination";


function Dashboard() {
  let [product,setProduct]=useState([])
  let [page,setPage]=useState(1)
  let [loading,setLoading]=useState(false)
  

  console.log(page)

let myData=()=>{
  setLoading(true)
  fetch(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/getrestaurants?page=${page}&limit=10`)
  .then((res)=>res.json())
  .then((data)=>{
    setProduct(data)
    setLoading(false)
  })
}

useEffect(()=>{
  myData()
},[page])
console.log(product)



let {authState,logoutUser}=useContext(AuthContext)

  return loading? <h1>Loading...</h1> : (
    <div>
      <h3>Dashboard</h3>
      <div>
        <button data-testid="logout-btn" onClick={logoutUser}>Logout</button>
        <p>
          Token:
          <b data-testid="user-token">{authState.token}</b>
        </p>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        {/* restaurant table */}
        <RestaurantTable data={product.data}/>
      </div>
      <div data-testid="pagination-container">
       {/* pagination table */}
       <Pagination currentPage={page} totalPages={product?.totalPages} handlePageChange={(val)=>setPage(val)}/>
      
      </div>
    </div>
  );
}

export default Dashboard;


// totalPages
// currentPage
// handlePageChange