
let form=document.querySelector("form");

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    let obj={
        email:form.email.value,
        password:form.password.value
    };
    fetch("https://reqres.in/api/login", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(obj),
      })
        .then((res) => {
          alert("new user has been added");
          console.log(res)
        })
        .catch((err) => {
          alert("somthing went wrong");
        });
});
