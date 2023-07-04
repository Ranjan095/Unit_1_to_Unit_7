/** @format */

let USER_URL = "https://mock-1st.onrender.com/users";

let form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let obj = {
    name: form.name.value.toLowerCase(),
    age: +form.age.value,
    place: form.place.value,
    batch_name: form.batchName.value,
    profession: form.profession.value,
  };
  fetch(USER_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(obj),
  })
    .then(() => {
      alert("new user has been added");
    })
    .catch((err) => {
      alert("somthing went wrong");
    });
});
