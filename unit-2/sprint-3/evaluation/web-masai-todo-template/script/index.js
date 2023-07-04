// Write all the JS Code related to Home Page Here 

document.querySelector("form").addEventListener("submit",myFun);
let arr=JSON.parse(localStorage.getItem("task"))||[]
function myFun(event){
event.preventDefault()
let taskName=document.querySelector("#name").value;
let taskType=document.querySelector("#type").value;
let date=document.querySelector("#date").value;
let priority=document.querySelector("#priority").value;

let obj={
    taskName,
    taskType,
    date,
    priority,

}
arr.push(obj)
localStorage.setItem("task",JSON.stringify(arr))
    result(obj);
}

function result(obj){
    let row=document.createElement("tr");

    let td1=document.createElement("td");
    td1.innerText=obj.taskName;
    let td2=document.createElement("td");
    td2.innerText=obj.taskType;
    let td3=document.createElement("td");
    td3.innerText=obj.date;
    let td4=document.createElement("td");
    td4.innerText=obj.priority;
    let td5=document.createElement("td");
    td5.innerText="completed"
    // td5.style.backgroundColor="red"

    row.append(td1,td2,td3,td4,td5)

    document.querySelector("tbody").append(row);

    td5.addEventListener("click",completed);
}

function completed(){
// console.log("sdljf;asl")
}