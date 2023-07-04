// fill in javascript code here

document.querySelector("form").addEventListener("submit",myFun);

function myFun(event){
    event.preventDefault()
let dName=document.querySelector("#name").value;
let dId=document.querySelector("#docID").value;
let speci=document.querySelector("#dept").value;
let expe=document.querySelector("#exp").value;
let email=document.querySelector("#email").value;
let mobile=document.querySelector("#mbl").value;

// console.log(dName,dId,speci,email,mobile)

let obj={
    dName,
    dId,
    speci,
    expe,
    email,
    mobile,
}
  result(obj);
}

function result(obj){

    let row=document.createElement("tr");
    
    let name=document.createElement("td");
    name.innerText=obj.dName;
    let id=document.createElement("td");
    id.innerText=obj.dId;
    let spec=document.createElement("td");
    spec.innerText=obj.speci;
    let exp=document.createElement("td");
    exp.innerText=obj.expe;
    let emai=document.createElement("td");
    emai.innerText=obj.email;
    let mobi=document.createElement("td");
    mobi.innerText=obj.mobile;
    let role=document.createElement("td");
    if(obj.expe>5){
        role.innerText="Senior";
    }else if(obj.expe>2 && obj.expe<=5){
        role.innerText="Junior";
    }else{
        role.innerText="Trainee";
    }

    let delet=document.createElement("td");
    delet.innerText="Delete"
    delet.style.backgroundColor="red"

    // delet.addEventListener("click",deleteRow)
    

    row.append(name,id,spec,exp,emai,mobi,role,delet);

    document.querySelector("tbody").append(row);
    // console.log(obj)
}
// function deleteRow(){
    // document.querySelector("tbody").splice(1,1)
    // console.log("ralkj")
// }




