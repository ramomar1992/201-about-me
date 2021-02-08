'use strict';
alert('Hello,there! \n My name is Omar and this is my page.\nLet\'s play a guessing game. I will ask you some' +
        ' questions and you are going to answer with only( yes or no) you can use. (y or n)\nLets first know your name.');
let userName = '';
let condition = true;
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

function question1() {
  let answer = '';
  let cond = true;
  while (cond === true) {
    answer = prompt('Do you like swimming?');
    switch (answer.toLowerCase()) {
    case 'y':
    case 'yes':
      alert('Yeeeah, I love swimming too lovely ' + userName);
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
  return answer;
}
function question2() {
  let answer = '';
  let cond = true;
  while (cond === true) {
    answer = prompt('Is computers appeal to you?');
    switch (answer.toLowerCase()) {
    case 'y':
    case 'yes':
      alert('Then you should be a technology person, my respect ' + userName);
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
  return answer;
}
function question3() {
  let answer = '';
  let cond = true;
  while (cond === true) {
    answer = prompt('Do you love celebreties?');
    switch (answer.toLowerCase()) {
    case 'y':
    case 'yes':
      alert('I think you should look for something more valuable to care for and like.');
      cond = false;
      break;
    case 'n':
    case 'no':
      alert('I think this is the least thing to care about as well hahah. Hi five ' + userName);
      cond = false;
      break;
    default:
      alert('Please answer with yes or no.');
      break;
    }
  }
  return answer;
}
function question4() {
  let answer = '';
  let cond = true;
  while (cond === true) {
    answer = prompt('Do you have pits?');
    switch (answer.toLowerCase()) {
    case 'y':
    case 'yes':
      alert('OK, but don\'t forget to vaccine them on time ' + userName);
      cond = false;
      break;
    case 'n':
    case 'no':
      alert('I can understand that. Animals are harmful sometimes!');
      cond = false;
      break;
    default:
      alert('Please answer with yes or no.');
      break;
    }
  }
  return answer;
}
function question5() {
  let answer = '';
  let cond = true;
  while (cond === true) {
    answer = prompt('Do you play video games?');
    switch (answer.toLowerCase()) {
    case 'y':
    case 'yes':
      alert('Hahaha, Yeaaah. I like that!! I think we are now besties ' + userName);
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
  return answer;
}

let quOneAnswer = question1();
// console.log(quOneAnswer);
alert('Your input was ' + quOneAnswer);
let quTwoAnswer = question2();
// console.log(quTwoAnswer);
alert('Your input was ' + quTwoAnswer);
let quThreeAnswer = question3();
// console.log(quThreeAnswer);
alert('Your input was ' + quThreeAnswer);
let quFourAnswer = question4();
// console.log(quFourAnswer);
alert('Your input was ' + quFourAnswer);
let quFiveAnswer = question5();
// console.log(quFiveAnswer);
alert('Your input was ' + quFiveAnswer);

alert('Thank you for playing the game ' + userName + '. I hope you enjoy it.\nNow, welcome to my little page ' + userName + '.');
