
let loginForm=document.querySelector("#loginForm")
let RegisterForm=document.querySelector("#registerForm")
let users;
async function getUser(){
    let res=await fetch(`https://doctor-data.onrender.com/users`);
    let user=await res.json();
    users=user;
    console.log(user)
}
getUser()


RegisterForm.addEventListener("submit",(e)=>{
    e.preventDefault()
    
    let obj={
        name:RegisterForm.userName.value,
        email:RegisterForm.email.value,
        password:RegisterForm.password.value,
        doctor:RegisterForm.doctor.checked
    }
    
    fetch(`https://doctor-data.onrender.com/users`,{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body : JSON.stringify(obj)
    }).then(()=>{
        alert('register successfully')
    })
})

loginForm.addEventListener("submit",(e)=>{
    e.preventDefault()

   let email=loginForm.email.value;
   let password=loginForm.password.value;
  
   let flag=false;
    users?.forEach(ele => {
        if(ele.email==email && ele.password==password && ele.doctor==true){
           flag=true
           localStorage.setItem("token",JSON.stringify({name:ele.name,doctor:true}))
           window.location.href="../Doctor’s Dashboard/dashbord.html"
        }
        if(ele.email==email && ele.password==password && ele.doctor==false){
            flag=true
            localStorage.setItem("token",JSON.stringify({name:ele.name,doctor:false}))
            window.location.href="../Book Appointments/appointments.html"
         }
    })
    if(flag){
        alert("login successful")
       
    }else{
        alert("login failed")
    }
})

