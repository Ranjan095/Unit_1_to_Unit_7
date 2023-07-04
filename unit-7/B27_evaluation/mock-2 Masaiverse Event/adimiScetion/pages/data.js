/** @format */

let form = document.querySelector("#form");

let USER_URL = "https://mock-1st.onrender.com/users";
let image_url =
  "https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png";

let main = document.querySelector("#container");
let sort_LTH = document.querySelector(".LTH");
let sort_HTL = document.querySelector(".HTL");
let filter = document.querySelector("#filter");
let search = document.querySelector("#search");

search.addEventListener("submit", (e) => {
  e.preventDefault();
  let userName = document.querySelector("#userName").value;
  getData(`${USER_URL}?name=${userName.toLowerCase()}`);
});

filter.addEventListener("change", () => {
  if (filter.value == "") {
    getData(USER_URL);
  } else {
    getData(`${USER_URL}?profession=${filter.value}`);
  }
});

sort_LTH.addEventListener("click", () => {
  getData(`${USER_URL}?_sort=age&_order=asc`);
});
sort_HTL.addEventListener("click", () => {
  getData(`${USER_URL}?_sort=age&_order=desc`);
});

let getData = (url) => {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      displayData(data);
    });
};

getData(USER_URL);

function displayData(data) {
  main.innerHTML = null;

  data.forEach((ele) => {
    let box = document.createElement("div");
    box.setAttribute("class", "box");

    let image = document.createElement("img");
    image.setAttribute("src", image_url);
    let name = document.createElement("h3");
    name.innerText = ele?.name;
    let age = document.createElement("h3");
    age.innerText = ele.age;
    let place = document.createElement("h3");
    place.innerText = ele.place;

    let batch_name = document.createElement("h3");
    batch_name.innerText = ele.batch_name;
    let profession = document.createElement("h3");
    profession.innerText = ele.profession;

    let edit = document.createElement("button");
    edit.innerText = "Edit";

    edit.addEventListener("click", () => handleEdit(ele.id));

    let deleted = document.createElement("button");
    deleted.innerText = "Delete";
    deleted.addEventListener("click", () => handleDelete(ele.id));

    box.append(image, name, age, place, batch_name, profession, edit, deleted);
    main.append(box);
  });
}

let handleEdit = (id) => {
  fetch(`${USER_URL}/${id}`)
    .then((res) => res.json())
    .then((ele) => {
      // console.log(ele.batch_name)
      form.name.value = ele.name;
      form.age.value = ele.age;
      form.place.value = ele.place;
      form.batchName.value = ele.batch_name;
      form.profession.value = ele.profession;
    });
};
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
      alert("user has been updated");
      getData(USER_URL)
    })
    .catch((err) => {
      alert("somthing went wrong");
    });
});
let handleDelete = (id) => {
  fetch(`${USER_URL}/${id}`, {
    method: "delete",
  }).then(() => {
    getData(USER_URL);
    alert("Delete Successful");
  });
};
