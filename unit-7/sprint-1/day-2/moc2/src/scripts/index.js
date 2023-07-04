/** @format */

//add your js code here

let tbody = document.querySelector("tbody");
let prev = document.querySelector("#prev");
let next = document.querySelector("#next");
// let toFilter=document.querySelector("#toFilter")
let count=1



let getData = async (page) => {
  let value = await fetch(
    `https://jsonmock.hackerrank.com/api/football_matches?page=${page}&_limit=10`,
    {
      method: "GET",
    }
  );
  let data = await value.json();
  // console.log(data.data)
console.log(data)
  showDisplay(data.data);
};
getData(count);

///*** Pagination */
prev.addEventListener("click",()=>{
    count--
    getData(count)
});
next.addEventListener("click",()=>{
    count++
    getData(count)
})

let showDisplay = (data) => {
  console.log(data);
  tbody.innerHTML = "";

  data.map((ele, i) => {
    let row = document.createElement("tr");

    let competition = document.createElement("td");
    competition.innerText = ele.competition;
    let year = document.createElement("td");
    year.innerText = ele.year;
    let round = document.createElement("td");
    round.innerText = ele.round;
    let team1 = document.createElement("td");
    team1.innerText = ele.team1;
    let team2 = document.createElement("td");
    team2.innerText = ele.team2;
    let team1goals = document.createElement("td");
    team1goals.innerText = ele.team1goals;
    let team2goals = document.createElement("td");
    team2goals.innerText = ele.team2goals;

    row.append(competition, year, round, team1, team2, team1goals, team2goals);
    tbody.append(row);
  });
};
