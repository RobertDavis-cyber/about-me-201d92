'use strict';

console.log('Aloha!');

let score = 0;

let visitorName = prompt('What is your name?');

alert(`Aloha and mahalo for visiting ${visitorName}! Please answer yes or no to the following questions.`);

function favoriteIsland() {
  let questionOneGuess = prompt('Have you been to Hawaii?').toUpperCase();
  //                      'yes'.toUpperCase()
  //                      'YES'

  if (questionOneGuess === 'YES' || questionOneGuess === 'Y') {
    alert('Do you miss paradise!');
  } else if (questionOneGuess === 'NO' || questionOneGuess === 'N') {
    alert('You should book a flight.');
  }
}
favoriteIsland();

function spam() {
  let questionTwoGuess = prompt('Have you eaten Hawaiian Food Spam Musubi?').toLowerCase();
  //                      'YES'.toLowerCase()
  //                      'yes'

  if (questionTwoGuess === 'YES' || questionTwoGuess === 'Y') {
    alert('Hawaiian Food is yummy ono!');
  } else if (questionTwoGuess === 'NO' || questionTwoGuess === 'N') {
    alert('You should come to Hawaii to eat some good food!.');
  }
}
spam();

function shaveIce() {
  let questionThreeGuess = prompt('Have you eaten Hawaiian Food?').toLowerCase();
  //                      'YES'.toLowerCase()
  //                      'yes'

  if (questionThreeGuess === 'YES' || questionThreeGuess === 'Y') {
    alert('Hawaiian Food is yummy ono!');
  } else if (questionThreeGuess === 'NO' || questionThreeGuess === 'N') {
    alert('You should come to Hawaii to eat some good food!.');
  }
}
shaveIce();

function catchWaves() {
  let questionFourGuess = prompt('Have you tried surfing?').toLowerCase();
  //                      'YES'.toLowerCase()
  //                      'yes'

  if (questionFourGuess === 'YES' || questionFourGuess === 'Y') {
    alert('Go grab your board and fly to Hawaii!');
  } else if (questionFourGuess === 'NO' || questionFourGuess === 'N') {
    alert('You should come to Hawaii to hang ten!');
  }
}
catchWaves();

function hula() {
  let questionFiveGuess = prompt('Have you tried Hawaiian dance?').toLowerCase();
  //                      'YES'.toLowerCase()
  //                      'yes'

  if (questionFiveGuess === 'YES' || questionFiveGuess === 'Y') {
    alert('Hula is the best way to shake the stress away!');
  } else if (questionFiveGuess === 'NO' || questionFiveGuess === 'N') {
    alert('You need to try Hula the hawaiian dance!');
  }
}
hula();

alert(`Mahalo for visting, ${visitorName}. Mahalo for coming to my site!`);

function game() {
  let myNum = 17;
  let guessRemain = 4;
  while (gueses > 0) {
  let userGuess = prompt('Guess what number I am thinking: Pick a number between 1 to 20');
    if (userGuess > myNum) {
      alert('Nice try your number is too High');
    } else if (userGuess < myNum) {
      alert('Nice try your number is too Low');
    } else {
      alert('Great job! You got the correct number');
      break;
    }
  }
}
game();

//FOR LOOP

function names() {
  let boyNames = ['Daniel', 'Bobby', 'David', 'Robert'];

  for (let i = 0; i < 6; i++) { //! slow loop (runs)
    let boyGuess = prompt('Help name a baby boy');

    for (let j = 0; j < boyNames.length; j++) { //!fast loop (runs 4*6 times)
      if (boyGuess === boyNames[j]) {
        alert("Great name!");
        i = 6;
        break;
      }
    }
  }
}
names();
alert('All possible answers are: ${boyNames}');

alert(`Score: ${score}/7`);




