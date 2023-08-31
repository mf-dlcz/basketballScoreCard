let homeScore = document.getElementById("homeScore");
let guestScore = document.getElementById("guestScore");

//Global scope variables
let scoreCount = 0;

const add1_homeScore = () => {
  scoreCount += 1;
  homeScore.textContent = scoreCount;
}

const add2_homeScore = () => {
  scoreCount += 2;
  homeScore.textContent = scoreCount;
}

const add3_homeScore = () => {
  scoreCount += 3;
  homeScore.textContent = scoreCount;
}

const add1_guestScore = () => {
  scoreCount += 1;
  guestScore.textContent = scoreCount;
}

const add2_guestScore = () => {
  scoreCount += 2;
  guestScore.textContent = scoreCount;
}

const add3_guestScore = () => {
  scoreCount += 3;
  guestScore.textContent = scoreCount;
}

const resetHomeScore = () => {
  homeScore.textContent =  0;
  scoreCount = 0;
}

const resetGuestScore = () => {
  guestScore.textContent = 0;
  scoreCount = 0;
}