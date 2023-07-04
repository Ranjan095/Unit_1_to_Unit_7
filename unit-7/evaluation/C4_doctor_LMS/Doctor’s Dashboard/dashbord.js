/** @format */

let form = document.querySelector("#postForm");
let tbody = document.querySelector("tbody");
let patchForm=document.querySelector("#patchForm")
let model = document.querySelector("#modle");

//****************************** */

let user=JSON.parse(localStorage.getItem("token"))
console.log(user)
if(user){
  if(!user.doctor){
    alert("you are not a Doctor")
    window.location.href="../homePage/home.html"
  }

}else{
  window.location.href="../homePage/home.html"
}

function getData() {
  tbody.innerHTML = "";
  fetch(`https://doctor-data.onrender.com/appointments`)
    .then((res) => res.json())
    .then((data) => {
      data.forEach((ele) => {
        let row = document.createElement("tr");

        let name = document.createElement("td");
        name.innerText = ele.name;
        let specialization = document.createElement("td");
        specialization.innerText = ele.specialization;
        let experience = document.createElement("td");
        experience.innerText = ele.experience;
        let location = document.createElement("td");
        location.innerText = ele.location;
        let slots = document.createElement("td");
        slots.innerText = ele.slots;
        let edit = document.createElement("td");
        edit.innerText = "Edit";
        edit.addEventListener("click", () => {
          editFun(ele.id);
        });
        let Delete = document.createElement("td");

        Delete.addEventListener("click", () => {
          deletFun(ele.id);
        });

        Delete.innerText = "Delete";
        let Appointments = document.createElement("td");
        Appointments.innerText = "Appointments";

        row.append(
          name,
          specialization,
          experience,
          location,
          slots,
          edit,
          Delete,
          Appointments
        );
        tbody.append(row);
      });
    });
}
getData();

let editFun = (id) => {
  let model = document.querySelector("#modle");
  model.style.display = "block";

  fetch(`https://doctor-data.onrender.com/appointments/${id}`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      patchForm.name.value=data.name;
      patchForm.image.value=data.image;
      patchForm.spec.value=data.specialization;
      patchForm.experiene.value=data.experience;
      patchForm.location.value=data.location;
      patchForm.date.value=data.date;
      patchForm.slot.value=data.slots;
      patchForm.fee.value=data.fee

    });
  patchForm.addEventListener("submit",(e)=>{
    e.preventDefault();
    let obj = {
      name: patchForm.name.value,
      image: patchForm.image.value,
      specialization: patchForm.spec.value,
      experience: +patchForm.experiene.value,
      location: patchForm.location.value,
      date: patchForm.date.value,
      slots: +patchForm.slot.value,
      fee: +patchForm.fee.value,
    };
    // console.log(obj)
    fetch(`https://doctor-data.onrender.com/appointments/${id}`,{
      method:"PATCH",
      headers:{
        "Content-Type":"application/json"
      },
      body: JSON.stringify(obj)
    }).then(()=>{
      alert("data has been updated")
      getData()
      model.style.display = "none";
    })
  })
};
let closeButton = document.querySelector("#closeButton");
closeButton.addEventListener("click", () => {
  let model = document.querySelector("#modle");
  model.style.display = "none";
});

let deletFun = (id) => {
  fetch(`https://doctor-data.onrender.com/appointments/${id}`, {
    method: "DELETE",
  }).then(() => {
    alert("date has been deleted");
    getData();
  });
};

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let obj = {
    name: form.name.value,
    image: form.image.value,
    specialization: form.spec.value,
    experience: +form.experiene.value,
    location: form.location.value,
    date: form.date.value,
    slots: +form.slot.value,
    fee: +form.fee.value,
  };
  console.log(obj);

  fetch(`https://doctor-data.onrender.com/appointments`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(obj),
  }).then(() => {
    alert("appoinment successfully");
    getData()
  });
});
