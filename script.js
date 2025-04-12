const btn_start = document.querySelector(".btn_start");
const start_game = document.getElementById("start_game");
const title = document.querySelector(".title");
const right_count = document.getElementById("right_count");
const wrong_count = document.getElementById("wrong_count");
const btn_stop = document.querySelector(".btn_stop");
const score_card = document.getElementById("score_card");
const Close = document.getElementById("Close");
const progressBar = document.getElementById("progressBar");
const range = document.getElementById("range");
const range_bar = document.getElementById("range_bar");
let rangeValue;
let rightAnswer = 0;
let wrongAnswer = 0;
let interval;
let initialStart;
let isStart = false;

btn_start.onclick = () => {
  rangeValue = 100;
  range.value = 0;
  let countdown = 0;
  if ((countdown = 0)) {
    setTimeout(() => {
      title.textContent = "Ready";
    }, 2000);
  }
  initialStart = setInterval(() => {
    countdown++;

    title.textContent = countdown;
    if (countdown > 3) {
      clearInterval(initialStart);
      title.textContent = "Let's Go";
      range_bar.classList.remove("visible");
      setTimeout(() => {
        getRandomLetter();
        isStart = true;

        Timer();
      }, 1300);
    }
  }, 1000);
  start_game.classList.add("hidden");
};

function getRandomLetter() {
  let letters = "abcdefghijklmnopqrstuvwxyz";
  let randomNumber = Math.floor(Math.random() * letters.length);
  console.log(letters[randomNumber]);
  title.textContent = letters[randomNumber].toUpperCase();
}

window.addEventListener("keydown", (e) => {
  if (isStart) {
    if (e.key.toUpperCase() == title.textContent.toUpperCase()) {
      rightAnswer++;
      right_count.textContent = rightAnswer;
    } else {
      wrongAnswer++;
      wrong_count.textContent = wrongAnswer;
    }
    getRandomLetter();
    Timer();
  }
});

btn_stop.onclick = () => {
  if (!isStart) {
    alert(
      "Please Wait Game not start yet. After starts, you can stop the game"
    );
    return;
  }
  score_card.classList.remove("hidden");
  document.getElementById("total_right").textContent = rightAnswer;
  document.getElementById("Total_wrong").textContent = wrongAnswer;
  progressBar.value = 0;
  clearInterval(interval);
  isStart = false;
};

Close.onclick = () => {
  location.reload();
};

function Timer() {
  progressBar.value = 0;
  clearInterval(interval);
  interval = setInterval(() => {
    progressBar.value++;
    if (progressBar.value == progressBar.max) {
      clearInterval(interval);
      getRandomLetter();
      Timer();
    }
  }, rangeValue);
}

range.onchange = () => {
  rangeValue = 100 - range.value;
  console.log(rangeValue);
  Timer();
};
