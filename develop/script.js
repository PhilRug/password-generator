// Assignment code here
var lowerChars;
var thingys;
var bigLetter;
var numberChars;

letter = "abcdefghijklmnopqrstuvwxyz".split('');
numbers = "0123456789".split('');
thingys = "!@#$%^&*()".split('');

var userChoice;
var toUpper = function(e) {
    return e.toUpperCase()
};
bigLetter = letter.toUpper;
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword(){
    
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;


  enter = parseInt(prompt("How many characters would you like your password to be?"));
  if (!enter) {
      alert("I thought you wanted a password!");
      return;
  } else if (enter < 8 || enter > 128) {
      enter = parseInt(prompt("You must choose between 8 and 128"));
      return;
  } else {
    letter = confirm("Will this contain Lowercase letters?");
    bigLetter = confirm("Will this contain Uppercase letters?");
    numberChars = confirm("Will this contain numbers?");
    thingys = confirm("Will this contain special characters?");
  };

  if (!lowerChars && !thingys && !bigLetter && !numberChars) {
    userChoice = alert("you realize you didnt select anything, right?");
    //4 choices
  } else if (lowerChars && thingys && bigLetter && numberChars) {
    userChoice = letter.concat(numberChars, thingys, bigLetter);
    //3 choices
  } else if (lowerChars && thingys && numberChars) {
    userChoice = letter.concat(thingys, numberChars);
  } else if (lowerChars && bigLetter && thingys) {
    userChoice = letter.concat(bigLetter, thingys);
  } else if (lowerChars && bigLetter && numberChars) {
    userChoice = letter.concat(bigLetter, numberChars);
  }
  
  
  for (var i = 0; i < enter; i++) {
    var choices = userChoice[Math.floor(Math.random() * userChoice.length)];
    password.push(choices);
}
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
