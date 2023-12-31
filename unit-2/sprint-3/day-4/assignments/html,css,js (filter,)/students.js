// All the Code for All Students Page Goes Here

let LSData=JSON.parse(localStorage.getItem("admission"));
let tbody=document.querySelector("tbody")
let filter=document.getElementById("filter");

function displayTable(data){
    tbody.innerHTML=null;

    data.forEach((element,index)=>{
        
        let tr = document.createElement("tr");

        let name= document.createElement("td");
        name.innerText=element.name;

        let email= document.createElement("td");
        email.innerText=element.email;

        let gender= document.createElement("td");
        gender.innerText=element.gender;

        let phone= document.createElement("td");
        phone.innerText=element.phone;

        let course= document.createElement("td");
        course.innerText=element.course;

        let accetp= document.createElement("td");
        accetp.innerText="accetp";
        accetp.addEventListener("click",function(){
            addData("admission_accepted",element)
            deleteData(LSData,index)
        })

        let reject= document.createElement("td");
        reject.innerText="reject";
        reject.addEventListener("click",function(){
            addData("admission_rejected",element)
            deleteData(LSData,index)
        })

        tr.append(name,email,course,gender,phone,accetp,reject);

        tbody.append(tr);
    })
}

function addData(key,value){
    let newLSData=JSON.parse(localStorage.getItem(key))||[];
    newLSData.push(value);
    localStorage.setItem(key,JSON.stringify(newLSData));
}

function deleteData(data,index){
    data.splice(index,1);
    localStorage.setItem("admission",JSON.stringify(data));
    displayTable(data);
}

filter.addEventListener("change",function(){
    if(filter.value=="" || filter.value=="all"){
        displayTable(LSData);
    }else{
        let filteredData=LSData.filter((el)=>{
            return el.course===filter.value;
        })
        displayTable(filteredData);
    }
})

displayTable(LSData);