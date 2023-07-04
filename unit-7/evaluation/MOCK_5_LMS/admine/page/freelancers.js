/** @format */

let token = localStorage.getItem("token");
let container = document.querySelector("#container");
let modalForm = document.querySelector("#modalForm");

if (!token) {
  window.location.href = "./login.html";
  alert("please login first");
}

let request = false;
let success = false;
let err = false;

let getData = async (url=`https://tempapi-r5wx.onrender.com/freelancers`) => {
  try {
    request = true;
    let res = await fetch(url);
    let data = await res.json();
    request = false;
    success = true;
    // console.log(data)
    displayData(data);
  } catch (error) {
    request = false;
    err = true;
  }
};
getData();


let lowSort=document.querySelector("#asc");
let HighSort=document.querySelector("#desc")
let search=document.querySelector("#search");
search.addEventListener("input",(e)=>{
  let val=e.target.value;
  getData(`https://tempapi-r5wx.onrender.com/freelancers?q=${val}`)
})

lowSort.addEventListener("click",()=>{
  getData(`https://tempapi-r5wx.onrender.com/freelancers?_sort=hourly_rate&_order=asc`)
})

HighSort.addEventListener("click",()=>{
  getData(`https://tempapi-r5wx.onrender.com/freelancers?_sort=hourly_rate&_order=desc`)
})

function displayData(data) {
  container.innerHTML = "";
  data.forEach((ele) => {
    console.log(ele);
    let box = document.createElement("div");
    box.setAttribute("class", "box");
    let image = document.createElement("img");
    image.setAttribute("src", ele.profile_picture);
    let name = document.createElement("h2");
    name.innerText = ele.name;
    let email = document.createElement("p");
    email.innerText = `Email : ${ele.email}`;
    let profession = document.createElement("p");
    profession.innerText = `Profession : ${ele.profession}`;
    let skill = document.createElement("p");
    skill.innerText = `Skills : ${ele.skills.join(",")}`;
    let hourly = document.createElement("p");
    hourly.innerText = `Hourly Rate : $${ele.hourly_rate}`;
    let bookingStatus = document.createElement("p");
    bookingStatus.innerText = `Booking Status : ${ele.isBooked}`;

    let buttonBox = document.createElement("div");
    buttonBox.setAttribute("class", "buttonBox");

    let deleteButton = document.createElement("button");
    deleteButton.setAttribute("class", "delete");
    deleteButton.innerText = "Delete";
    deleteButton.addEventListener("click", () => {
      deleteFun(ele.id);
    });

    let editButton = document.createElement("button");
    editButton.setAttribute("class", "edit");
    editButton.innerText = "Edit";
    editButton.addEventListener("click", () => {
      EditFun(ele.id);
    });

    let hireButton = document.createElement("button");
    hireButton.setAttribute("class", "hire");
    // hireButton.setAttribute("disabled", ele.isBooked);
    hireButton.innerText = "HIRE ME";
    hireButton.addEventListener("click", () => {
      
      hireButtonFun(ele.id);
    });
    buttonBox.append(editButton, deleteButton, hireButton);

    box.append(
      image,
      name,
      email,
      profession,
      skill,
      hourly,
      bookingStatus,
      buttonBox
    );
    container.append(box);
  });
}

let deleteFun = (id) => {
  fetch(`https://tempapi-r5wx.onrender.com/freelancers/${id}`, {
    method: "DELETE",
  }).then(() => {
    alert("data has been Deleted");
    getData();
  });
};

let hireButtonFun = (id) => {

  fetch(`https://tempapi-r5wx.onrender.com/freelancers/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({isBooked:true }),
  }).then(() => {
    alert("data has been updated");
    getData();
  });
};
let model = document.querySelector("#modal");

let close = document.querySelector("#close");
close.addEventListener("click", () => {
  model.style.display = "none";
});

let EditFun = (id) => {
  fetch(`https://tempapi-r5wx.onrender.com/freelancers/${id}`)
    .then((res) => res.json())
    .then((data) => {
      modalForm.name.value = data.name;
      modalForm.email.value=data.email;
      modalForm.password.value=data.password;
      modalForm.email.value=data.password;
      modalForm.profession.value=data.profession;
      modalForm.skills.value=data.skills.join(',');
      modalForm.hourly_rate.value=data.hourly_rate;
      modalForm.image.value=data.profile_picture;
      modalForm.isBooked.value=data.isBooked

    });

   

    modalForm.addEventListener("submit",(e)=>{
      e.preventDefault()
      
      let arr=[];
      let ss=modalForm.skills.value;
      arr=ss.split(",")

    let obj = {
      name: modalForm.name.value,
      email:modalForm.email.value,
      password:modalForm.email.value,
      profession:modalForm.profession.value,
      skills: arr,
      hourly_rate:+modalForm.hourly_rate.value,
      profile_picture:modalForm.image.value,
      isBooked:modalForm.isBooked.value
    };
    fetch(`https://tempapi-r5wx.onrender.com/freelancers/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(obj),
    }).then(() => {
      alert("data has been updated");
      model.style.display = "none";
      getData();
    });
     
    })



  model.style.display = "block";
};
