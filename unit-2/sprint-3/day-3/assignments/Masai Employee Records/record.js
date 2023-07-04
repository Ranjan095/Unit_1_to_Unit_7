// fill in javascript code here

document.querySelector("form").addEventListener("submit",myFun);

function myFun(event){
event.preventDefault();

let name=document.querySelector("#name").value;
let eId=document.querySelector("#employeeID").value;
let depart=document.querySelector("#department").value;
let exp=document.querySelector("#exp").value;
let email=document.querySelector("#email").value;
let mobile=document.querySelector("#mbl").value;

let obj={
    name,
    eId,
    depart,
    exp,
    email,
    mobile,
}

result(obj);
// console.log(name,eId,depart,exp,email,mobile)

}

function result(obj){
let row=document.createElement("tr");
    

let name=document.createElement("td");
name.innerText=obj.name;
let eId=document.createElement("td");
eId.innerText=obj.eId;
let dep=document.createElement("td");
dep.innerText=obj.depart;
let exp=document.createElement("td");
exp.innerText=obj.exp;
let email=document.createElement("td");
email.innerText=obj.email;
let mobile=document.createElement("td");
mobile.innerText=obj.mobile;
let role=document.createElement("td");
if(exp.innerText>5){
    role.innerText="Senior";
}else if(exp.innerText>2 && exp.innerText<=5){
    role.innerText="Junior"
}else{
    role.innerText="Fresher"
}

let delet=document.createElement("td");
delet.innerText="Delete"
delet.style.backgroundColor="red"

row.append(name,eId,dep,exp,email,mobile,role,delet)

document.querySelector("tbody").append(row);
}