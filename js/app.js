'use strict'
// guesing game about me

let count = 0;

function aboutMe() {
  let userAnswerOrig = prompt('Do you love to fly ?');
  let userAnswer = userAnswerOrig.toLowerCase();
  if (userAnswer=== 'yes'){
    alert('Thats the correct answer , move on to level 2!')
    count++ ;
  }else{
    alert('its ofcourse yes for me!');
  }
}

aboutMe();

function aboutMe1(){
  let userAnswerBOrig = prompt('Do you love music?')
  let userAnswerB = userAnswerBOrig.toLowerCase();
  if (userAnswerB=== 'yes'){
    alert('Thats the correct answer , move on to the next level!')
  }else{
    alert(' I love rock n roll!');
  }
}
aboutMe1();

function aboutMe2(){
let userAnswerCOrig = prompt('Do you love videgames?');
let userAnswerC = userAnswerCOrig.toLowerCase();
if (userAnswerC=== 'yes'){
  alert('Thats the correct answer , move on to the next level!')
  count++;
}else{
alert('there is only one correct answer yes!')
}
}
aboutMe2();

function aboutMe3(){
let userAnswerDOrig = prompt('Do you love the gym?')
let userAnswerD = userAnswerDOrig.toLowerCase();
if (userAnswerD === 'no'){
  alert('Thats the correct answer , lets see the results!')
  count++;
}else{
alert('ALMOST GAME OVER')
}
}
aboutMe3();

function aboutMe4(){
let userAnswerEOrig = prompt('do you love star wars?')
let userAnswerE = userAnswerEOrig.toLowerCase();
if (userAnswerE === 'yes'){
  alert('Thats the correct answer , lets see the results!')
  count++;
}else{
alert('GAME OVER, not the correct answer');
}
}
aboutMe4();


// let userName = prompt ('Please Enter Your Name')
// alert('Hi ' + userName + ' thanks for visiting my page ! ' + 'Your Answers are - ' +  ' Do you love to fly ?'
// + userAnswer + ' Do you love music? ' + userAnswerB + ' Do you love videgames? ' + userAnswerC + ' Do you love the gym? '
// + userAnswerD + ' do you love star wars? ' + userAnswerE)

// guessing number game
// give the user a number to guess between 1 and 100

function randomNum(){
let correctAnswer = Math.floor(Math.random() * 100);
console.log(correctAnswer);
let numberOfAttempts = 4;
// let letters = /^[A-Za-z]+$/;

for (let i=0 ; i<numberOfAttempts ; i++){
  let userInput = prompt('Enter a number between 1-100');

  if(userInput < 1 || userInput > 100 ){
    alert('I say again , Enter a number between 1-100');
  }else if(userInput == correctAnswer){
    alert('You got it right!');
    count++;
   break;
  }else if(userInput>correctAnswer){
      alert('you are too high ,go low');
      
  } else if(userInput<correctAnswer){
    alert('you are too low , go high');
  }
}
alert('the correct answer is ' + correctAnswer);
}
randomNum();

// array game guess my favourite sport

function array1(){
let arrayFavSport = ['football' , 'basketball' , 'cricket' , 'tennis' , 'chess' , 'baseball'];

let numberOfGuesses = 5;
let correctSport = false;

while (!correctSport && numberOfGuesses>0){
  let userGuess = prompt('what is my fav sport?');
for (let j=0 ; j<arrayFavSport.length ; j++){
  if (userGuess==arrayFavSport[j]){
    alert('congrats');
    correctSport=true;
    break;
      
}
}
if (correctSport) {
  alert('Great job, here is a list of the other choices ' + arrayFavSport);
  count++;
} 
// if they got it wrong and they are on 5-2 we will tell them to try again
if (!correctSport && numberOfGuesses <= 5 && numberOfGuesses > 1) {
  alert('sorry you are incorrect please guess again');
} 
// if they got it wrong and are on the last guess then we will tell them the answers
if (!correctSport && numberOfGuesses === 1) {
  alert('Sorry you are incorrect. Possible options were ' + arrayFavSport);
}
numberOfGuesses--; // change that will break the loop
}
}

array1();

alert('your final score is ' + count);

