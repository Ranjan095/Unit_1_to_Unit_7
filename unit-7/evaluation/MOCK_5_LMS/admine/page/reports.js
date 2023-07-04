

let tbody=document.querySelector("tbody")
let token = localStorage.getItem("token");
// let container = document.querySelector("#container");

if (!token) {
  window.location.href = "./login.html";
  alert("please login first");
}

let getData = async (url=`https://tempapi-r5wx.onrender.com/freelancers`) => {
  try {
    let res = await fetch(url);
    let data = await res.json();
    // console.log(data)
    displayFun(data);
  } catch (error) {
    
  }
};
getData();

let displayFun=(data)=>{
tbody.innerHTML="";
let row=document.createElement("tr");
let total=document.createElement("td")
total.innerText=data.length;

row.append(total)
tbody.append(row)
}