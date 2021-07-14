'use strict'
// guesing game about me

let userAnswerOrig = prompt('Do you love to fly ?')
let userAnswer = userAnswerOrig.toLowerCase();
if (userAnswer=== 'yes'){
  alert('Thats the correct answer , move on to level 2!')
}else{
alert('you have 4 more chances!')
};

let userAnswerBOrig = prompt('Do you love music?')
let userAnswerB = userAnswerBOrig.toLowerCase();
if (userAnswerB=== 'yes'){
  alert('Thats the correct answer , move on to the next level!')
}else{
alert('you have 3 more chances!')
};

let userAnswerCOrig = prompt('Do you love videgames?')
let userAnswerC = userAnswerCOrig.toLowerCase();
if (userAnswerC=== 'yes'){
  alert('Thats the correct answer , move on to the next level!')
}else{
alert('you have 2 more chances!')
};

let userAnswerDOrig = prompt('Do you love the gym?')
let userAnswerD = userAnswerDOrig.toLowerCase();
if (userAnswerD === 'no'){
  alert('Thats the correct answer , lets see the results!')
}else{
alert('GAME OVER')
};

let userName = prompt ('Please Enter Your Name')
alert('Hi ' + userName + ' thanks for visiting my page ! ' + 'Your Answers are - ' +  ' Do you love to fly ?'
+ userAnswer + ' Do you love music? ' + userAnswerB + ' Do you love videgames? ' + userAnswerC + ' Do you love the gym? '
+ userAnswerD)
