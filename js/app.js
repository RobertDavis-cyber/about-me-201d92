'use strict';

console.log('Aloha!');

let visitorName = prompt('What is your name?');

alert(`Aloha and mahalo for visiting ${visitorName}! Please answer yes or no to the following questions.`);

let questionOneGuess = prompt('Have you been to Hawaii?').toUpperCase();
//                      'yes'.toUpperCase()
//                      'YES'

if(questionOneGuess === 'YES' || questionOneGuess === 'Y') {
  alert('Do you miss paradise!');
} else if (questionOneGuess === 'NO' || questionOneGuess === 'N') {
  alert('You should book a flight.');
}
let questionTwoGuess = prompt('Have you eaten Hawaiian Food?').toLowerCase();
//                      'YES'.toLowerCase()
//                      'yes'

if(questionTwoGuess === 'YES' || questionOneGuess === 'Y') {
  alert('Hawaiian Food is yummy ono!');
} else if (questionOneGuess === 'NO' || questionOneGuess === 'N') {
  alert('You should come to Hawaii to eat some good food!.');
}
let questionThreeGuess = prompt('Have you eaten Hawaiian Food?').toLowerCase();
//                      'YES'.toLowerCase()
//                      'yes'

if(questionThreeGuess === 'YES' || questionOneGuess === 'Y') {
  alert('Hawaiian Food is yummy ono!');
} else if (questionOneGuess === 'NO' || questionOneGuess === 'N') {
  alert('You should come to Hawaii to eat some good food!.');
}
let questionFourGuess = prompt('Have you eaten Hawaiian Food?').toLowerCase();
//                      'YES'.toLowerCase()
//                      'yes'

if(questionFourGuess === 'YES' || questionOneGuess === 'Y') {
  alert('Hawaiian Food is yummy ono!');
} else if (questionOneGuess === 'NO' || questionOneGuess === 'N') {
  alert('You should come to Hawaii to eat some good food!.');
}
let questionFiveGuess = prompt('Have you eaten Hawaiian Food?').toLowerCase();
//                      'YES'.toLowerCase()
//                      'yes'

if(questionFiveGuess === 'YES' || questionOneGuess === 'Y') {
  alert('Hawaiian Food is yummy ono!');
} else if (questionFiveGuess === 'NO' || questionOneGuess === 'N') {
  alert('You should come to Hawaii to eat some good food!.');
}

alert(`Mahalo for visting, ${visitorName}. Mahalo for coming to my site!`);

let myNum = 17;
let guessRemain = 4;
let userGuess = prompt('Guess what number I am thinking: Pick a number between 1 to 20');
while (guessRemain > 0) {
  if (userGuess > myNum) {
    alert('Nice try your number is too High');
  } else if (userGuess < myNum) {
    alert('Nice try your number is too Low');
  } else { 
    alert('Great job! You got the correct number');
    break;
  }
}
//FOR LOOP

let boyNames = ['Daniel', 'Bobby', 'David', 'Robert'];

for (let i = 0; i < 6; i++) { //! slow loop (runs)
  let boyGuess = prompt('Help name a baby boy');

  for (let j = 0; j < boyNames.length; j++) { //!fast loop (runs 4*6 times)
    if(boyGuess === boyNames [j]) {
      alert("Great name!");
      i = 6;
      break;
    }
  }
}
alert('All possible answers are: ${boyNames}');

alert(`Score: ${score}/2`);




