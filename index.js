//DOM manipulation
let homeScore = document.getElementById("homeScore");
let guestScore = document.getElementById("guestScore");

//Global scope variables
let homeScoreCount = 0;
let guestScoreCount = 0;

const addScore = () => {

  homeScore.textContent = homeScoreCount;
  guestScore.textContent = guestScoreCount;
}


const resetScore = () => {
  //resets homeScore
  homeScore.textContent =  0;
  homeScoreCount = 0;

//resets guestScore
  guestScore.textContent = 0;
  guestScoreCount = 0;
}