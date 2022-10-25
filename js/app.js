
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
let questionTwoGuess = prompt('Have you eaten Hawaiian Food?').toLowerCase();
//                      'YES'.toLowerCase()
//                      'yes'

if(questionThreeGuess === 'YES' || questionOneGuess === 'Y') {
  alert('Hawaiian Food is yummy ono!');
} else if (questionOneGuess === 'NO' || questionOneGuess === 'N') {
  alert('You should come to Hawaii to eat some good food!.');
}
let questionThreeGuess = prompt('Have you eaten Hawaiian Food?').toLowerCase();
//                      'YES'.toLowerCase()
//                      'yes'

if(questionFourGuess === 'YES' || questionOneGuess === 'Y') {
  alert('Hawaiian Food is yummy ono!');
} else if (questionOneGuess === 'NO' || questionOneGuess === 'N') {
  alert('You should come to Hawaii to eat some good food!.');
}
let questionFourGuess = prompt('Have you eaten Hawaiian Food?').toLowerCase();
//                      'YES'.toLowerCase()
//                      'yes'

if(questionFiveGuess === 'YES' || questionOneGuess === 'Y') {
  alert('Hawaiian Food is yummy ono!');
} else if (questionFiveGuess === 'NO' || questionOneGuess === 'N') {
  alert('You should come to Hawaii to eat some good food!.');


alert(`Mahalo for visting, ${visitorName}. Mahalo for coming to my site!`);