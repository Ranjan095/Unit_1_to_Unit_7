
document.querySelector("#signUp").addEventListener("click",myFun);

let dataArr=JSON.parse(localStorage.getItem("data"))||[];

function myFun(){
    let email=document.querySelector("#email").value;
    let phone=document.querySelector("#phone").value;
    let password=document.querySelector("#password").value;

    let obj={
        email,
        phone,
        password,
    }
    dataArr.push(obj)
    localStorage.setItem("data",JSON.stringify(dataArr))

    let login=document.createElement("a");
    login.innerText="Login"
    login.setAttribute("href","login.html")
    document.querySelector("#container").append(login);
}