/** @format */

//add your js code here
let tbody = document.querySelector("tbody");
let year = document.querySelector("#year");
let team1 = document.querySelector("#team1");
let team2 = document.querySelector("#team2");
let yearOf = 2011;
let cusTeam;

year.addEventListener("change", (e) => {
  let val = e.target.value;
  if (val == "") {
    yearOf = 2011;
    getData(yearOf);
  } else {
    yearOf = val;
    getData(yearOf, cusTeam);
  }
});
team1.addEventListener("change", (e) => {
  let val = e.target.value;
  console.log(val);
  cusTeam = `team1=${val}`;
  getData(yearOf, `team1=${val}`);
});
team2.addEventListener("change", (e) => {
  let val = e.target.value;
  console.log(val);
  cusTeam = `team2=${val}`;
  getData(yearOf, `team2=${val}`);
});

let getData = async (val, team) => {
  let value = await fetch(
    `https://jsonmock.hackerrank.com/api/football_matches?year=${val}&${team}`,
    {
      method: "GET",
    }
  );
  let data = await value.json();
  // console.log(data.data)
  console.log(data);
  showDisplay(data.data);
};
getData(yearOf);

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
