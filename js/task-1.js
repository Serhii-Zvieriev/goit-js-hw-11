const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548",
];

const DELAY = 1000;
let intervalId = null;
let btnStartClicked = false;

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const refs = {
  btnStart: document.querySelector('[data-action="start"]'),
  btnStop: document.querySelector('[data-action="stop"]'),
  body: document.querySelector("body"),
};

refs.btnStart.addEventListener("click", randomBodyColor);
refs.btnStop.addEventListener("click", randomBodyColorStop);

function randomBodyColor() {
  if (btnStartClicked) {
    return;
  }
  intervalId = setInterval(
    () =>
      (refs.body.style.backgroundColor =
        colors[randomIntegerFromInterval(0, 5)]),
    DELAY
  );
  btnStartClicked = true;
}

function randomBodyColorStop() {
  clearInterval(intervalId);
  btnStartClicked = false;
}
