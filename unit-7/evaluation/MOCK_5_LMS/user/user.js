/** @format */

let form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let arr = [];
  let skills = form.skills.value;
  arr=skills.split(",");
  let obj = {
    name: form.name.value,
    email:form.email.value,
    password:form.email.value,
    profession:form.profession.value,
    skills: arr,
    hourly_rate:+form.hourly_rate.value,
    profile_picture:form.image.value,
    isBooked:false
  };
  fetch(`https://tempapi-r5wx.onrender.com/freelancers`,{
    method:"POST",
    headers:{
        "Content-Type":"application/json",
    },
    body:JSON.stringify(obj)
  }).then(()=>{
    alert("Successfully registered.")
  })
});
