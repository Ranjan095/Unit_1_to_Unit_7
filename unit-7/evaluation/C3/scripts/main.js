/** @format */

// --- do not touch  ↓↓↓↓↓↓↓↓↓↓↓↓ ----------
const baseServerURL = `http://localhost:${
  import.meta.env.REACT_APP_JSON_SERVER_PORT
}`;
// --- do not touch  ↑↑↑↑↑↑↑↑↑↑↑↑ ----------

// ***** Constants / Variables ***** //
const bookURL = `${baseServerURL}/books`;
let mainSection = document.getElementById("data-list-wrapper");

// book
let bookTitleInput = document.getElementById("book-title");
let bookImageInput = document.getElementById("book-image");
let bookCategoryInput = document.getElementById("book-category");
let bookAuthorInput = document.getElementById("book-author");
let bookPriceInput = document.getElementById("book-price");
let bookCreateBtn = document.getElementById("add-book");

// Update book
let updateBookIdInput = document.getElementById("update-book-id");
let updateBookTitleInput = document.getElementById("update-book-title");
let updateBookImageInput = document.getElementById("update-book-image");
let updateBookAuthorInput = document.getElementById("update-book-author");
let updateBookCategoryInput = document.getElementById("update-book-category");
let updateBookPriceInput = document.getElementById("update-book-price");
let updateBookBtn = document.getElementById("update-book");

//Update price
let updatePriceBookId = document.getElementById("update-price-book-id");
let updatePriceBookPrice = document.getElementById("update-price-book-price");
let updatePriceBookPriceButton = document.getElementById("update-price-book");

//sort and filter
let sortAtoZBtn = document.getElementById("sort-low-to-high");
let sortZtoABtn = document.getElementById("sort-high-to-low");
let filterClassic = document.getElementById("filter-Classic");
let filterFantasy = document.getElementById("filter-Fantasy");
let filterMystery = document.getElementById("filter-Mystery");

//Search by title/author

let searchBySelect = document.getElementById("search-by-select");
let searchByInput = document.getElementById("search-by-input");
let searchByButton = document.getElementById("search-by-button");

//Books Data
let booksData = [];
console.log('dlkfjakl')
//*********************** */

async function getBooks(url) {
  let res = await fetch(url);
  let books = await res.json();
  console.log(books);
  booksData = books;
  displayBooks(books);
}
getBooks(`${baseServerURL}/books`);
// console.log(booksData)

function displayBooks(books) {
  mainSection.innerHTML = "";
  let cardList = document.createElement("div");
  cardList.setAttribute("class", "card-list");

  books.forEach((ele, i) => {
    let card = document.createElement("div");
    card.setAttribute("class", "card");
    card.setAttribute("data-id", i + 1);

    let cardImage = document.createElement("div");
    cardImage.setAttribute("class", "card-img");
    let img = document.createElement("img");
    img.setAttribute("src", ele.image);
    cardImage.append(img);

    let cardBody = document.createElement("div");
    cardBody.setAttribute("class", "card-body");
    let cardTitle = document.createElement("h4");
    cardTitle.setAttribute("class", "card-title");
    cardTitle.innerText = ele.title;
    let cardAuthor = document.createElement("p");
    cardAuthor.setAttribute("class", "card-author");
    cardAuthor.innerText = ele.author;
    let cardCategory = document.createElement("p");
    cardCategory.setAttribute("class", "card-category");
    cardCategory.innerText = ele.category;
    let cardPrice = document.createElement("p");
    cardPrice.setAttribute("class", "card-price");
    cardPrice.innerText = ele.price;
    let cardLink = document.createElement("a");
    cardLink.setAttribute("href", "#");
    cardLink.setAttribute("data-id", i + 1);
    cardLink.setAttribute("class", "card-link");
    cardLink.innerText = "Edit";
    let cardButton = document.createElement("button");
    cardButton.setAttribute("data-id", i + 1);
    cardButton.setAttribute("class", "card-button");
    cardButton.innerText = "Delete";

    cardLink.addEventListener("click", (e) => {
      e.preventDefault();

      fetch(`${baseServerURL}/books/${ele.id}`)
        .then((res) => res.json())
        .then((data) => {
          updateBookIdInput.value = data.id;
          updateBookTitleInput.value = data.title;
          updateBookAuthorInput.value = data.author;
          updateBookCategoryInput.value = data.category;
          updateBookImageInput.value = data.image;
          updateBookPriceInput.value = data.price;

          updatePriceBookId.value=data.id;
          updatePriceBookPrice.value=data.price
        })
        updatePriceBookPriceButton.addEventListener("click",()=>{
          fetch(`${baseServerURL}/books/${ele.id}`, {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({price:+updatePriceBookPrice.value}),
          }).then(() => {
            alert("book has been updated");
            getBooks(`${baseServerURL}/books`);
          });
        })
      
          updateBookBtn.addEventListener("click", () => {
            let data = {
              id: updateBookIdInput.value,
              title: updateBookTitleInput.value,
              author: updateBookAuthorInput.value,
              category: updateBookCategoryInput.value,
              image: updateBookImageInput.value,
              price: +updateBookPriceInput.value,
            };
            // console.log(ele.id)
            fetch(`${baseServerURL}/books/${ele.id}`, {
              method: "PATCH",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(data),
            }).then(() => {
              alert("book has been updated");
              getBooks(`${baseServerURL}/books`);
            });
          });
    });

    cardButton.addEventListener("click", () => {
      fetch(`${baseServerURL}/books/${ele.id}`, {
        method: "delete",
      }).then(() => {
        alert("book is deleted");
        getBooks(`${baseServerURL}/books`);
      });
    });

    cardBody.append(
      cardTitle,
      cardAuthor,
      cardCategory,
      cardPrice,
      cardLink,
      cardButton
    );

    card.append(cardImage, cardBody);
    cardList.append(card);
    mainSection.append(cardList);
  });
  console.log(cardList);
}

//********** */ Add Book ***********//
bookCreateBtn.addEventListener("click", () => {
  let obj = {
    title: bookTitleInput.value,
    author: bookAuthorInput.value,
    category: bookCategoryInput.value,
    image: bookImageInput.value,
    price: +bookPriceInput.value,
  };
  console.log(obj);
  fetch(`${baseServerURL}/books`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(obj),
  }).then(() => {
    alert("book is added");
    getBooks(`${baseServerURL}/books`);
  });
});

//sort and filter
// let sortAtoZBtn = document.getElementById("sort-low-to-high");
// let sortZtoABtn = document.getElementById("sort-high-to-low");

sortAtoZBtn.addEventListener("click",()=>{
  getBooks(`${baseServerURL}/books?_sort=price&_order=asc`)
})

sortZtoABtn.addEventListener("click",()=>{
  getBooks(`${baseServerURL}/books?_sort=price&_order=desc`)
})