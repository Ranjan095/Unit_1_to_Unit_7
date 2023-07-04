// Write code for the Progress page here 
let pr=JSON.parse(localStorage.getItem('priority-list')) || []
console.log(pr)

let doneList=JSON.parse(localStorage.getItem('done-list')) || []

for (let i = 0; i < pr.length; i++) {
    let row = document.createElement("tr");
  
    let name = document.createElement("td");
    name.innerText = pr[i].name;
    let Description = document.createElement("td");
    Description.innerText = pr[i].Description;
    let startDate = document.createElement("td");
    startDate.innerText = pr[i].startDate;
    let endDate = document.createElement("td");
    endDate.innerText = pr[i].endDate;
    let priority = document.createElement("td");
    priority.innerText = pr[i].priority;
    let AddToProgress=document.createElement("td");
    AddToProgress.innerText="Add"
  
  
    AddToProgress.addEventListener("click",()=>{
        doneList.push(pr[i])
      localStorage.setItem("done-list",JSON.stringify(doneList))
      let listData=[];
      for(let j=0;j<pr.length;j++){
  if(j != i){
      listData.push(pr[j])
  }
      }
      localStorage.setItem("priority-list",JSON.stringify(listData))
    })
    row.append(name, Description, startDate, endDate, priority,AddToProgress);
    document.querySelector("tbody").append(row)
   
  }