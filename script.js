'use strict';

let msg = document.querySelector(`.message`).textContent;
let ans = document.querySelector(`.number`).textContent;
let lives = document.querySelector(`.score`).textContent;
// const guess = document.querySelector(`.guess`).value;
let check = document.querySelector(`.check`);
let secNum = Math.trunc(Math.random() * 20) + 1;
let again = document.querySelector(`.again`);
// document.querySelector(`.number`).textContent = secNum;

let score = 20;
let highscore = 0;

const gameover = function () {
  document.querySelector(`.message`).textContent = `💥GAME OVER`;
  document.querySelector(`.score`).textContent = score;
  document.querySelector('body').style.backgroundColor = 'red';
};

again.addEventListener('click', function () {
  document.querySelector(`.message`).textContent = `Start guessing...`;
  document.querySelector(`.number`).textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector(`.guess`).value = ' ';
  document.querySelector(`.score`).textContent = 20;
  secNum = Math.trunc(Math.random() * 20) + 1;
});

check.addEventListener('click', function () {
  const guess = Number(document.querySelector(`.guess`).value);
  console.log(guess);

  if (!guess) {
    document.querySelector(`.message`).textContent = `No Number`;
  } else if (guess === secNum) {
    document.querySelector(`.message`).textContent = `CORRECT!`;
    document.querySelector('body').style.backgroundColor = 'green';
    document.querySelector(`.number`).style.width = '30rem';
    document.querySelector(`.number`).textContent = secNum;
    if (score > highscore) {
      highscore = score;
      document.querySelector(`.highscore`).textContent = highscore;
    }
  } else if (guess < secNum) {
    if (score > 1) {
      document.querySelector(`.message`).textContent = `⬇ Too Low!`;
      score--;
      document.querySelector(`.score`).textContent = score;
    } else {
      gameover();
    }
  } else if (guess > secNum) {
    if (score > 1) {
      document.querySelector(`.message`).textContent = `⬆ Too High!`;
      score--;
      document.querySelector(`.score`).textContent = score;
    } else {
      gameover();
    }
  }
});
