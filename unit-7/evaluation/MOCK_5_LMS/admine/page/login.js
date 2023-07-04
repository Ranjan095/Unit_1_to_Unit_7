/** @format */

let form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let obj = {
    email: form.email.value,
    password: form.password.value,
  };
  fetch(`https://reqres.in/api/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(obj),
  })
    .then((res) => res.json())
    .then((data) => {
        console.log(data)
       if(data.token){
        alert('logged in')
        localStorage.setItem("token",data.token)
        window.location.href="./freelancers.html"
       }else{
        alert("somthing went wrong")
       }
        
    }).catch((err)=>{
        console.log(err)
    })
});
