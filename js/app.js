'use strict';
var myAge = prompt('Do you think Khalil is 20 years old? Please answer with "yes" or "no".').toLowerCase();

if(myAge.toLowerCase() === 'yes') {
  alert('Correct!');
} else {
  alert('Wrong!');
}
console.log('Yes, Khalil is 20 years');

var myCity = prompt('Do you think Khalil is from Seattle? Please answer with "yes" or "no".').toLowerCase();

if(myCity.toLowerCase() === 'yes'){
  alert('Correct!');
}else {
  alert('Wrong!');
}
console.log('Yes, Khalil is from Seattle');

var myHeight = prompt('Do you think Khalil is 6\'5"? Please answer with "yes" or "no".').toLowerCase();

if(myHeight.toLowerCase() === 'yes'){
  alert('Correct!');
}else {
  alert('Wrong!');
}
console.log('Khalil is 6\'5"!');

var myCar = prompt('Do you think Khalil owns a car? Please answer with "yes" or "no".').toLowerCase();

if(myCar.toLowerCase() === 'yes'){
  alert('Correct!');
}else {
  alert('Wrong!');
}
console.log('Yes! Khalil owns a Acura');

var mySport = prompt('Does Khalil play basketball? Please answer with "yes" or "no".').toLowerCase();

if(mySport.toLowerCase() === 'no'){
  alert('Correct!');
}else {
  alert('Wrong!');
}
console.log('Khalil plays soccer');

var correctAnswer = 5;
var guessesLeftKobe = 4;
while(guessesLeftKobe > 0) {
  var kobeRings = parseInt(prompt('How many rings does Kobe Bryant have?'));

  if(correctAnswer === kobeRings){
    alert('Correct!');
    break;
  }
  guessesLeftKobe--;
  alert('Wrong answer! You have ' + guessesLeftKobe + ' guesses remaining!');
}

var favoriteShoes = ['jordans', 'nike', 'adidas', 'yeezy', 'timberland'];

var guessesLeft = 6;
var flag = true;
while(guessesLeft > 0 && flag === true) {
  var shoeGuess = prompt('Can you guess one my favorite shoes?').toLowerCase();

  for(var i = 0; i < favoriteShoes.length; i++) {

    if(favoriteShoes[i] === shoeGuess){
      alert('Correct!');
      flag = false;
      break;

    } else {
      alert('Wrong answer! You have ' + guessesLeft + ' guesses remaining!');
    }
  }
  guessesLeft--;
}