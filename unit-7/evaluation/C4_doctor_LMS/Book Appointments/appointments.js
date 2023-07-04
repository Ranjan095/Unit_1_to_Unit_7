/** @format */

let continer = document.querySelector("#container");

let getData = () => {
    continer.innerHTML=""
  fetch(`https://doctor-data.onrender.com/appointments`)
    .then((res) => res.json())
    .then((data) => {
      data.forEach((ele) => {
        let box = document.createElement("div");
        box.setAttribute("id", "box");

        let image = document.createElement("img");
        image.setAttribute("src", ele.image);
        image.setAttribute("class", "image");
        let name = document.createElement("h3");
        name.innerText = ele.name;
        let imgName = document.createElement("div");
        imgName.setAttribute("class", "imgNmae");
        imgName.append(image, name);

        let disc = document.createElement("div");
        disc.setAttribute("class", "disc");

        let specialization = document.createElement("h5");
        specialization.innerText = `Specialization : ${ele.specialization}`;
        let experience = document.createElement("h5");
        experience.innerText = `Experience : ${ele.experience} Years`;
        let location = document.createElement("h5");
        location.innerText = `Location : ${ele.location}`;
        let date = document.createElement("h5");
        date.innerText = `Date : ${ele.date}`;
        let slots = document.createElement("h5");
        slots.innerText = `Slots : ${ele.slots}`;
        let fee = document.createElement("h5");
        fee.innerText = `Fee : $${ele.fee}`;
        disc.append(specialization, experience, location,date, slots, fee);

        let buttonBox = document.createElement("div");
        buttonBox.setAttribute("class", "buttonBox");
        let button = document.createElement("button");
        button.innerText = "BOOK NOW";
        // button.setAttribute("disabled",ele.slots <= 0)

        button.addEventListener("click", () => {
          bookNow(ele.id);
        });
        buttonBox.append(button);
        box.append(imgName, disc, buttonBox);
        continer.append(box);
      });
    });
};
getData();

let bookNow = async (id) => {
    let Dslots;
  let res=await fetch(`https://doctor-data.onrender.com/appointments/${id}`)
  let data=await res.json();
  Dslots=data.slots;
  
  fetch(`https://doctor-data.onrender.com/appointments/${id}`,{
    method:"PATCH",
    headers:{
        "Content-Type":"application/json"
    },
    body : JSON.stringify({slots:Dslots-1})
  }).then(()=>{
    alert('Slots booked');
    getData()
  })
};
