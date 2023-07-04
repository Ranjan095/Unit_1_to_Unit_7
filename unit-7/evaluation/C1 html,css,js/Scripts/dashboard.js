
// Write code related to dashboard page here


let storeData = JSON.parse(localStorage.getItem("task-list")) || [];
let priorityData=JSON.parse(localStorage.getItem('priority-list')) || []
let filter=document.getElementById("filter")


filter.addEventListener("change",(e)=>{
  let value=e.target.value;
  console.log(value)

  let filterData=storeData.filter((ele)=>{
    if(ele.priority==value){
      return ele;
    }else if (value==""){
      return ele
    }
  })
  dashboardFun(filterData)
  // console.log(filterData)
})



let dashboardFun=(data)=>{
  document.querySelector("#container").innerHTML=""
  let totalTask = data.length;
  document.querySelector("#task-count").innerText=totalTask
  
  
  for (let i = 0; i < totalTask; i++) {
    let row = document.createElement("tr");
  
    let name = document.createElement("td");
    name.innerText = data[i].name;
    let Description = document.createElement("td");
    Description.innerText = data[i].Description;
    let startDate = document.createElement("td");
    startDate.innerText = data[i].startDate;
    let endDate = document.createElement("td");
    endDate.innerText = data[i].endDate;
    let priority = document.createElement("td");
    priority.innerText = data[i].priority;
    let AddToProgress=document.createElement("td");
    AddToProgress.innerText="Add"
  
    AddToProgress.addEventListener("click",()=>{
      priorityData.push(storeData[i])
      localStorage.setItem("priority-list",JSON.stringify(priorityData))
      let listData=[];
      for(let j=0;j<data.length;j++){
  if(j != i){
      listData.push(data[j])
  }
      }
      localStorage.setItem("task-list",JSON.stringify(listData))
      dashboardFun()
    })
    row.append(name, Description, startDate, endDate, priority,AddToProgress);
    document.querySelector("tbody").append(row)
   
  }
}
dashboardFun(storeData)


