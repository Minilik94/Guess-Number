let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);
let score = 20;
let highscore = 0;
const displayMessage = (message) => {
  document.querySelector(".message").textContent = message;
};
const displayScore = (score) => {
  document.querySelector(".score").textContent = score;
};
const displayNumber = (number) => {
  document.querySelector(".number").textContent = number;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  if (!guess) {
    // document.querySelector(".message").textContent =
    // " No Number";
    displayMessage("No Number");
  } else if (guess > 20 || guess < 1) {
    // document.querySelector(".message").textContent =
    // " Number out of range";
    displayMessage("Number out of range");
  } else if (guess === secretNumber) {
    // document.querySelector(".message").textContent =
    // "Correct Number";
    displayMessage("Correct Number");

    document.querySelector("body").style.backgroundColor = "#60b347";
    // document.querySelector(".number").style.width = "30rem";
    displayNumber("30rem");
    // document.querySelector(".number").textContent = secretNumber;
    displayNumber(secretNumber);
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector(".message").textContent =
      // guess  > secretNumber ? "Too high" : "Too low";
      displayMessage(guess > secretNumber ? "Too high" : "Too low");
      score--;
      // document.querySelector(".score").textContent = score
      displayScore(score);
    } else {
      // document.querySelector('.message').textContent =
      // 'You lost the game';
      displayMessage("You lost the game");
      //   document.querySelector(".score").textContent = "0";
      displayScore("0");
    }
  }
  //     else if (guess > secretNumber) {
  //         if(score > 0){
  //     document.querySelector(".message").textContent =
  //     "Too High";
  //     score--;
  //     document.querySelector(".score").textContent = score;}
  //   } else if (guess < secretNumber) {
  //     if(score > 0){
  //     document.querySelector(".message").textContent =
  //      "Too Low";
  //     score--;
  //     document.querySelector(".score").textContent = score;
  //     }
  //   }
});
document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  // document.querySelector('.score').textContent = score;
  // document.querySelector('.message').textContent =
  // 'Start guessing';

  //   document.querySelector(".number").textContent = "?";

    document.querySelector(".number").style.width = "15rem";
  displayScore(score);
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage("Start guessing...");
  document.querySelector(".guess").value = "";
  displayNumber("?");
  document.querySelector("body").style.backgroundColor = "#222";
 
  
});
