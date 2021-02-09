'use strict';
alert('Hello,there! \n My name is Omar and this is my page.\nLet\'s play a guessing game. I will ask you some' +
' questions and you are going to answer with only( yes or no) you can use. (y or n)\nLets first know your name.');
let userName = '';
let condition = true;
let score = 0;
while (condition === true) {
  userName = prompt('What is your name?');
  if (userName !== '')
  {
    condition = false;
  }
  else {
    alert('Please enter a valid name!');
  }
}
// console.log('The user input is ' + userName);
alert('You are welcome to my page ' + userName);

let answer1 = '';
let cond = true;
while (cond === true) {
  answer1 = prompt('Do you like swimming?');
  switch (answer1.toLowerCase()) {
  case 'y':
  case 'yes':
      alert('Yeeeah, I love swimming too lovely ' + userName);
      score++;
    cond = false;
    break;
  case 'n':
  case 'no':
    alert('Oh, no. You need to love sports and exercising dude haha');
    cond = false;
    break;
  default:
    alert('Please answer with yes or no.');
    break;
  }
}

// console.log(answer1);
alert('Your input was ' + answer1);
alert('Your score now is ' + score + ' out of 7');
let answer2 = '';
cond = true;
while (cond === true) {
  answer2 = prompt('Is computers appeal to you?');
  switch (answer2.toLowerCase()) {
  case 'y':
  case 'yes':
    alert('Then you should be a technology person, my respect ' + userName);
    score++;
      cond = false;
    break;
  case 'n':
  case 'no':
    alert('Oh, why not. Technology is the best these days for your information.');
    cond = false;
    break;
  default:
    alert('Please answer with yes or no.');
    break;
  }
}
// console.log(answer2);
alert('Your input was ' + answer2);
alert('Your score now is ' + score + ' out of 7');
let answer3 = '';
cond = true;
while (cond === true) {
  answer3 = prompt('Do you love celebreties?');
  switch (answer3.toLowerCase()) {
  case 'y':
  case 'yes':
    alert('I think you should look for something more valuable to care for and like.');
    cond = false;
    break;
  case 'n':
  case 'no':
    alert('I think this is the least thing to care about as well hahah. Hi five ' + userName);
    score++;
      cond = false;
    break;
  default:
    alert('Please answer with yes or no.');
    break;
  }
}
// console.log(answer3);
alert('Your input was ' + answer3);
alert('Your score now is ' + score + ' out of 7');
let answer4 = '';
cond = true;
while (cond === true) {
  answer4 = prompt('Do you have pits?');
  switch (answer4.toLowerCase()) {
  case 'y':
  case 'yes':
    alert('OK, but don\'t forget to vaccine them on time ' + userName);
    cond = false;
    break;
  case 'n':
    case 'no':
      score++;
    alert('I can understand that. Animals are harmful sometimes!');
    cond = false;
    break;
  default:
    alert('Please answer with yes or no.');
    break;
  }
}
// console.log(answer4);
alert('Your input was ' + answer4);
alert('Your score now is ' + score + ' out of 7');
let answer5 = '';
cond = true;
while (cond === true) {
  answer5 = prompt('Do you play video games?');
  switch (answer5.toLowerCase()) {
  case 'y':
  case 'yes':
    alert('Hahaha, Yeaaah. I like that!! I think we are now besties ' + userName);
    score++;
      cond = false;
    break;
  case 'n':
  case 'no':
    alert('C\'mon dude!! Everyone plays video games these days. Try to go for some attempts with some games at least . . .');
    cond = false;
    break;
  default:
    alert('Please answer with yes or no.');
    break;
  }
}
// console.log(answer5);
alert('Your input was ' + answer5);
alert('Your score now is ' + score + ' out of 7');
let computerGuess = Math.floor(Math.random()*Math.floor(10));
// console.log(computerGuess);
alert('Now, before you go. Let\'s play a Guessing Game. I will have a number and you will guess what it is.');
let userGuess = '';
let listNum = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(computerGuess);
for (let i = 0; i < 4; i++) {
  userGuess = prompt('Enter a number between 0 and 10? ');
  // console.log(userGuess.replace(' ', ''));
  // alert('attempt num ' + (i+1));
  // console.log(Number(userGuess));
  // console.log('out of range = '+ (listNum.indexOf(userGuess)) === -1);
  // console.log('user input =  '+userGuess+' check not a num '+isNaN(userGuess));
  if (listNum.indexOf(Number(userGuess)) === -1 || userGuess.trim() === '') {
    i--;
    userGuess = alert('Please enter a valid number between 0 and 10');
    continue;
  } else if (parseInt( userGuess) === computerGuess && i === 0) {
    alert('congratulations you guessed it from the first time! ');
    score++;
    break;
  } else if (parseInt( userGuess) === computerGuess) {
    alert('congratulations you guessed it with ' + (i+1) + ' attempts');
    score++;
    break;
  } else if (parseInt( userGuess) > computerGuess && i <2) {
    alert('Too high! Try again.');
    alert('Now enter a lesser number . . . Remember you only have ' + (3 - i) + ' attempts left');
  } else if (parseInt( userGuess) < computerGuess && i <2) {
    alert('Too low! Try again.');
    alert('Now enter a greater number . . .remember you only have ' + (3 - i) + ' attempts left');
  } else if (i === 2) {
    if (userGuess < computerGuess) {
      alert('Too low! Try again.');
    } else {
      alert('Too high! Try again.');
    }
    alert('Your last attempt! Be careful .');
  } else {
    alert('Unfortunately, You lost !! \nThe answer was ' + computerGuess);
    break;
  }

}
alert('Your score now is ' + score + ' out of 7');
alert('Now, we are going to play another guessing game with multiple correct answers.However, do not worry you only need to guess one right answer');
let sultans = ['salem', 'murad', 'ahmad', 'mustafa', 'osman', 'ebrahim', 'sulaiman'];
let i = 0;
do {
  userGuess = prompt('Give me a name of one of the ottoman empire sultans during the period (1550 - 1700)?');
  console.log(sultans.indexOf(userGuess.toLowerCase()));
  if (!isNaN(userGuess) || userGuess === '') {
    userGuess = alert('Please enter a valid name');
    continue;
  } else if (sultans.indexOf(userGuess.toLowerCase()) !== -1 && i === 0) {
    alert('congratulations you guessed it from the first time! ');
    score++;
    break;
  } else if (sultans.indexOf(userGuess.toLowerCase()) !== -1) {
    alert('congratulations you guessed it with ' + (i + 1) + ' attempts');
    score++;
    break;
  } else if (i<4){
    alert('Wrong answer,you still have ' + (5 - i) + ' attemtps. Try again now...');
    i++;
  }else if (i === 4) {
    alert('Wrong again. Your last try ...');
    i++;
  } else {
    alert('You lost');
    i++;
  }
}while(i < 6);
alert('Your score now is ' + score + ' out of 7');
if (score > 3) {
  alert('WeeeHaa!!! Hi five We are so alike with mind and way of life. Much respect mate');
} else {
  alert('Nah!! Unfortunately we still need so much to become compatible. We are now so disimiler!!');
}
alert('Thank you for playing the game ' + userName + '. I hope you enjoy it.\nNow, welcome to my little page ' + userName + '.');
