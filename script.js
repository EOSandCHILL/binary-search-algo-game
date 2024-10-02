'use strict';

let secretNumber = Math.trunc(Math.random() * 1000) + 1;
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    displayMessage('No Number!!!');
  } else if (guess === secretNumber) {
    displayMessage('Correct Number!');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? 'Too High!' : 'Too Low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('You Lost! Gameover!');
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 1000) + 1;
  displayMessage('Start Guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});

// Modal elements
const modal = document.querySelector('.modal');
const btnInstructions = document.querySelector('.btn--instructions');
const closeBtn = document.querySelector('.close-btn');

// Open modal on button click
btnInstructions.addEventListener('click', function () {
  modal.classList.remove('hidden');
  document.body.classList.add('modal-open'); // Add blur to background
});

// Close modal when the close button is clicked
closeBtn.addEventListener('click', function () {
  modal.classList.add('hidden');
  document.body.classList.remove('modal-open'); // Remove blur from background
});

// Close modal when clicking outside the modal content
window.addEventListener('click', function (e) {
  if (e.target === modal) {
    modal.classList.add('hidden');
    document.body.classList.remove('modal-open'); // Remove blur from background
  }
});
