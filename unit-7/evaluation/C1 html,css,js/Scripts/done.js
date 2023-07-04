// Write code related to Done page here

// Write code for the Progress page here 
let pr=JSON.parse(localStorage.getItem('done-list')) || []
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
   

    row.append(name, Description, startDate, endDate, priority);
    document.querySelector("tbody").append(row)
   
  }