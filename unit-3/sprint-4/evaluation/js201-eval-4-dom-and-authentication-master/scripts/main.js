// --- do not touch  ↓↓↓↓↓↓↓↓↓↓↓↓ ----------
const baseServerURL = `http://localhost:${import.meta.env.REACT_APP_JSON_SERVER_PORT
  }`;
// --- do not touch  ↑↑↑↑↑↑↑↑↑↑↑↑ ----------

const recipeIngredientURL = `${baseServerURL}/recipeIngredients`;
const employeeURL = `${baseServerURL}/employees`;
const userRegisterURL = `${baseServerURL}/user/register`;
const userLoginURL = `${baseServerURL}/user/login`;
let paginationWrapper = document.getElementById("pagination-wrapper");

let loginUserUsername = document.getElementById("login-user-username");
let loginUserPassword = document.getElementById("login-user-passowrd");

let loginUserButton = document.getElementById("login-user");
let getTodoButton = document.getElementById("fetch-todos");

let mainSection = document.getElementById("data-list-wrapper");
let notificationWrapper = document.getElementById("notifications-wrapper");

let userAuthToken = localStorage.getItem("localAccessToken") || null;
let userId = +localStorage.getItem("userId") || null;
const urlAllTodosOfUser = `${baseServerURL}/todos?userId=${userId}`;
const urlTodosBase = `${baseServerURL}/todos/`;



//**login page */
loginUserButton.addEventListener("click", () => {

  let obj = {
    username: loginUserUsername.value,
    password: loginUserPassword.value
  }
  // console.log(obj)
  login_user(obj)
})

async function login_user(obj) {
  try {
    let resp = await fetch(userLoginURL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(obj)
    })
    if (resp.ok === true) {
      let data = await resp.json();
      // console.log(data.user.id)

      notificationWrapper.innerHTML = `<h5 class="notification info">
hey ${obj.username}, welcome back!
</h5>`
      // console.log(data)
      localStorage.setItem("localAccessToken", data.accessToken);
      localStorage.setItem("userId", data.user.id)
    } else {
      alert("Ohh..check data")
    }

  } catch (error) {
    console.log(error)
  }
}

////**fetchTdo */

// let fetchTodo=document.getElementById("fetch-todos");
getTodoButton.addEventListener("click", () => {
  // console.log(event)
  async function todos() {
    try {
      let resp = await fetch(urlAllTodosOfUser, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `bearear ${userAuthToken}`
        }
      })
      let data = await resp.json();
let append=document.getElementById("data-list-wrapper");
append.innerHTML="";
      let arr_map = data.map((item) => {
        return `
        <div id="todo-list-wrapper" class="todo-list-wrapper">
        <label><input class="todo-item-checkbox" data-id=${userId} type="checkbox">${item.title
        }</label>
       </div>
        
        `
      })
      append.innerHTML=arr_map.join(" ")

      // console.log(data)

    } catch (error) {
      console.log(error)
    }
  }
  todos()
})