'use strict';
// guesing game about me

let count = 0;

function aboutMe(x,y) {
  let userAnswerOrig = prompt(x);
  let userAnswer = userAnswerOrig.toLowerCase();
  if (userAnswer=== 'yes' || userAnswer==='y'){
    alert(y);
    count++ ;
  }else{
    alert('oops thats the wrong answer');
  }
  return userAnswer;
}
let aboutMeAnswer =  aboutMe('Do I like to fly?','ofcourse i do');
let aboutMeAnswer2 = aboutMe('Do I love music?','wow you love music also');
let aboutMeAnswer3 = aboutMe('Do I love videgames?','we can be friends now');
let aboutMeAnswer4 = aboutMe('Do I love the gym?','haha , im loving you for all the right answers!');
let aboutMeAnswer5 = aboutMe('do I love star wars?','may the force be with you!');

let userName = prompt ('Please Enter Your Name')
alert('Hi ' + userName + ' thanks for visiting my page ! ' + 'Your Answers are - ' +  ' Do you love to fly ?'
+ aboutMeAnswer + ' Do you love music? ' + aboutMeAnswer2 + ' Do you love videgames? ' + aboutMeAnswer3 + ' Do you love the gym? '
+ aboutMeAnswer4 + ' do you love star wars? ' + aboutMeAnswer5);

// guessing number game
// give the user a number to guess between 1 and 100

function randomNum(){
  let correctAnswer = Math.floor(Math.random() * 100);
  console.log(correctAnswer);
  let numberOfAttempts = 4;

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
    if (!correctSport && numberOfGuesses <= 5 && numberOfGuesses > 1) {
      alert('sorry you are incorrect please guess again');
    }
    if (!correctSport && numberOfGuesses === 1) {
      alert('Sorry you are incorrect. Possible options were ' + arrayFavSport);
    }
    numberOfGuesses--;
  }
}

array1();

alert('your final score is ' + count);

