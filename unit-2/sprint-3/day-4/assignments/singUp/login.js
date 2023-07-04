


document.querySelector("#login").addEventListener("click",myFun);

let item=JSON.parse(localStorage.getItem("data"));

function myFun(){
    let email=document.querySelector("#email").value;
    let phone=document.querySelector("#phone").value;
    let password=document.querySelector("#password").value;
      
    let flag=false;
    for(let i=0;i<item.length; i++){
        if(email==item[i].email&& phone==item[i].phone && password==item[i].password){
            flag=true;
        }
    }
    if(flag==true){
        alert("login successful.")
    }else{
        alert("please check your data")
    }
}