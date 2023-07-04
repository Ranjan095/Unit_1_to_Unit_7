/** @format */

// Write code related to Home page here

let storeData=JSON.parse(localStorage.getItem('task-list')) || []

let button = document
  .querySelector("form")
  .addEventListener("submit", handleForm);

function handleForm(e) {
  e.preventDefault();

  let name = document.querySelector("#name").value;
  let Description = document.querySelector("#desc").value;
  let startDate = document.querySelector("#start").value;
  let endDate = document.querySelector("#end").value;
  let priority = document.querySelector("#priority").value;

  let obj = {
    name,
    Description,
    startDate,
    endDate,
    priority,
  };
  storeData.push(obj)
  localStorage.setItem('task-list',JSON.stringify(storeData))
}
