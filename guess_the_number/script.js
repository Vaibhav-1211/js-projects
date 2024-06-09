'use strict';

//here, i did the DOM manipulation by updating message content
// document.querySelector('.message').textContent = 'Correct Number!'
// console.log(document.querySelector('.message').textContent);

// //Another example
// document.querySelector('.number').textContent = '14';
// document.querySelector('.score').textContent = '10';

// document.querySelector('.guess').value = 22;
// console.log(document.querySelector('.guess').value);

//Handling Click Events
//Eventlistener: we can wight for the certain event to happen and then react to it.It is a method
//type of the event here it is just a simple 'click';

let secreteNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  //When there is no input
  if (!guess) {
    // document.querySelector('.message').textContent = 'No Number!';
    displayMessage('No Number!');
    //When Player wins
  } else if (guess === secreteNumber) {
    // document.querySelector('.message').textContent = 'Correct Number!';
    displayMessage('Correct Number!');
    document.querySelector('.number').textContent = secreteNumber;

    document.querySelector('body').style.backgroundColor = '#60b347'; //to change the whole page color manipulating the css

    document.querySelector('.number').style.width = '30rem'; //change the width of the secretNumber box.

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
    //When guess is Wrong.
  } else if (guess !== secreteNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent = guess > secreteNumber ? 'Too high!' : 'Too low!';

      displayMessage(guess > secreteNumber ? 'Too high!' : 'Too low!');
      score--; //decreasing the score by 1
      document.querySelector('.score').textContent = score;
    } else {
      // document.querySelector('.message').textContent = 'You Lost the game!';
      displayMessage('You Lost the game!');
      document.querySelector('.score').textContent = 0;
    }
  }
  // //when guess is too high
  // else if (guess > secreteNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = 'Too high!';
  //     score--; //decreasing the score by 1
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = 'You Lost the game!';
  //     document.querySelector('.score').textContent = 0;
  //   }
  //   //When guess is too low

  // } else if (guess < secreteNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = 'Too low!';
  //     score--; //decreasing the score by 1
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = 'You Lost the game!';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secreteNumber = Math.trunc(Math.random() * 20) + 1;
  // document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});


//Implementing the Game Logic
//what happen when guess is correct/equal/too low/too high

//Manipulating the CSS
//Implemented refactoring for duplication of code.




