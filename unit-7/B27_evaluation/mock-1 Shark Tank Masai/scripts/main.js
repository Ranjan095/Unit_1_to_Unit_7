/** @format */

// --- do not touch  ↓↓↓↓↓↓↓↓↓↓↓↓ ----------
const baseServerURL = `http://localhost:${
  import.meta.env.REACT_APP_JSON_SERVER_PORT
}`;
// --- do not touch  ↑↑↑↑↑↑↑↑↑↑↑↑ ----------

// ***** Constants / Variables ***** //
const pitchURL = `${baseServerURL}/pitches`;
let mainSection = document.getElementById("data-list-wrapper");

// pitch
let pitchTitleInput = document.getElementById("pitch-title");
let pitchImageInput = document.getElementById("pitch-image");
let pitchCategoryInput = document.getElementById("pitch-category");
let pitchfounderInput = document.getElementById("pitch-founder");
let pitchPriceInput = document.getElementById("pitch-price");
let pitchCreateBtn = document.getElementById("add-pitch");

// Update pitch
let updatePitchIdInput = document.getElementById("update-pitch-id");
let updatePitchTitleInput = document.getElementById("update-pitch-title");
let updatePitchImageInput = document.getElementById("update-pitch-image");
let updatePitchfounderInput = document.getElementById("update-pitch-founder");
let updatePitchCategoryInput = document.getElementById("update-pitch-category");
let updatePitchPriceInput = document.getElementById("update-pitch-price");
let updatePitchBtn = document.getElementById("update-pitch");

//Update price
let updatePricePitchId = document.getElementById("update-price-pitch-id");
let updatePricePitchPrice = document.getElementById("update-price-pitch-price");
let updatePricePitchPriceButton = document.getElementById("update-price-pitch");

//sort and filter
let sortAtoZBtn = document.getElementById("sort-low-to-high");
let sortZtoABtn = document.getElementById("sort-high-to-low");
let filterFood = document.getElementById("filter-Food");
let filterElectronics = document.getElementById("filter-Electronics");
let filterPersonalCare = document.getElementById("filter-Personal-Care");

sortAtoZBtn.addEventListener("click",()=>{
  getData(`${pitchURL}?_sort=price&_order=asc`);
})

sortZtoABtn.addEventListener("click",()=>{
  getData(`${pitchURL}?_sort=price&_order=desc`);
})

//Search by title/founder

let searchBySelect = document.getElementById("search-by-select");
let searchByInput = document.getElementById("search-by-input");
let searchByButton = document.getElementById("search-by-button");

//*******************now Start**********************************//

let getData = (url) => {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      // console.log(data)
      displayData(data);
    });
};
getData(`${pitchURL}`);

let displayData = (data) => {
  mainSection.innerHTML = null;
  let cardList = document.createElement("div");
  cardList.setAttribute("class", "card-list");

  data.map((ele, i) => {
    let card = document.createElement("div");
    card.setAttribute("class", "card");
    card.setAttribute("data-id", i + 1);

    let cardImage = document.createElement("div");
    cardImage.setAttribute("class", "card-img");
    let image = document.createElement("img");
    image.setAttribute("src", ele.image);
    cardImage.append(image);

    let cardBody = document.createElement("div");
    cardBody.setAttribute("class", "card-body");
    let title = document.createElement("h4");
    title.setAttribute("class", "card-title");
    title.innerText = ele.title;

    let founder = document.createElement("p");
    founder.setAttribute("class", "card-founder");
    founder.innerText = ele.founder;

    let category = document.createElement("p");
    category.setAttribute("class", "card-category");
    category.innerText = ele.category;

    let price = document.createElement("p");
    price.setAttribute("class", "card-price");
    price.innerText = ele.price;

    let edit = document.createElement("a");
    edit.setAttribute("class", "card-link");
    edit.setAttribute("href", "#");
    edit.setAttribute("data-id", ele.id);
    edit.innerText = "Edit";
    edit.addEventListener("click", (e) => handleEdit(e, ele?.id));

    let button = document.createElement("button");
    button.setAttribute("class", "card-button");
    button.setAttribute("data-id", ele.id);
    button.innerText = "Delete";

    button.addEventListener("click", () => handleDelete(ele.id));

    cardBody.append(title, founder, category, price, edit, button);

    card.append(cardImage, cardBody);
    // console.log(ele);

    cardList.append(card);
  });
  mainSection.append(cardList);
};
/*
//Update price
let updatePricePitchId = document.getElementById("update-price-pitch-id");
let updatePricePitchPrice = document.getElementById("update-price-pitch-price");
let updatePricePitchPriceButton = document.getElementById("update-price-pitch");
*/

updatePricePitchPriceButton.addEventListener("click",()=>{
  let id=+updatePricePitchId.value;
  let price=updatePricePitchPrice.value;

 let obj={price}
console.log(obj)
  fetch(`${pitchURL}/${id}`,{
    method:"PATCH",
    headers:{"Content-Type":"application/json"},
    body:JSON.stringify(obj)
  }).then(()=>{
    console.log("price has been updated")
    getData(`${pitchURL}`);
  }).catch((err)=>{
    console.log(err)
  })

})

let handleEdit = (e, id) => {
  e.preventDefault();
  // let updatePitchTitleInput = document.getElementById("update-pitch-title");
 
  fetch(`${pitchURL}/${id}`)
    .then((res) => res.json())
    .then((data) => {
      updatePitchIdInput.value=data?.id;
      updatePitchTitleInput.value=data?.title;
      updatePitchImageInput.value=data?.image;
      updatePitchfounderInput.value=data?.founder;
      updatePitchCategoryInput.value=data?.category;
      updatePitchPriceInput.value=data?.price;
    });
};

updatePitchBtn.addEventListener("click",()=>{
 
  let obj={
    id:updatePitchIdInput.value,
    title:updatePitchTitleInput.value,
    price:updatePitchPriceInput.value,
    image:updatePitchImageInput.value,
    category:updatePitchCategoryInput.value,
    founder:updatePitchfounderInput.value
  }
let id=updatePitchIdInput.value;
  fetch(`${pitchURL}/${id}`,{
    method:"PATCH",
    headers:{"Content-Type":"application/json"},
    body:JSON.stringify(obj)
  }).then(()=>{
    console.log("data has been updated")
    getData(`${pitchURL}`);
  }).catch((err)=>{
    console.log(err)
  })

})

let handleDelete = (id) => {
  fetch(`${pitchURL}/${id}`,{
method:"DELETE",

  }).then(()=>{
    console.log("Data has been deleted")
    getData(`${pitchURL}`);
  }).catch((err)=>{
    console.log(err)
  })
};


/**
 * // pitch
let pitchTitleInput = document.getElementById("pitch-title");
let pitchImageInput = document.getElementById("pitch-image");
let pitchCategoryInput = document.getElementById("pitch-category");
let pitchfounderInput = document.getElementById("pitch-founder");
let pitchPriceInput = document.getElementById("pitch-price");
let pitchCreateBtn = document.getElementById("add-pitch");
 */

pitchCreateBtn.addEventListener("click",()=>{
   
  let obj={
    title:pitchTitleInput.value,
    price:+pitchPriceInput.value,
    image:pitchImageInput.value,
    category:pitchCategoryInput.value,
    founder:pitchfounderInput.value
  }
  fetch(`${pitchURL}`,{
    method:"POST",
    headers:{"Content-Type":"application/json"},
    body:JSON.stringify(obj)
  }).then(()=>{
    console.log("new data has been added")
    getData(`${pitchURL}`);
  }).catch((err)=>{
    console.log(err)
  })
})
