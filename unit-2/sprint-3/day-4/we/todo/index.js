 
 
 document.querySelector("form")
 .addEventListener("submit",myToDo);

let todoarr=JSON.parse(localStorage.getItem("todo"))||[];
let favarr=JSON.parse(localStorage.getItem("favourites"))||[];
function myToDo(event){
    event.preventDefault();
    let taskName=document.querySelector("#task").value;
    let taskPriority=document.querySelector("#priority").value;
    let taskObj={
        taskName,
        taskPriority,
    }
    todoarr.push(taskObj)
    localStorage.setItem("todo",JSON.stringify(todoarr))
    tableData(todoarr);
}

function tableData(todoarr){
    document.querySelector("tbody").innerHTML="";
    for(let i=0;i<todoarr.length; i++){
    let row=document.createElement("tr");
    let td1=document.createElement("td");
    td1.innerText=todoarr[i].taskName;
    let td2=document.createElement("td");
    td2.innerText=todoarr[i].taskPriority;
    if(todoarr[i].taskPriority=="High"){
        td2.style.backgroundColor="red";
    }else{
        td2.style.backgroundColor="green"
    }
    let td3=document.createElement("td");
    td3.innerText="Add as fav"
    td3.addEventListener("click",function(){
        favarr.push(todoarr[i]);
        localStorage.setItem("favourites",JSON.stringify(favarr))
    })
    row.append(td1,td2,td3);
    document.querySelector("tbody").append(row);
    }
    
}


