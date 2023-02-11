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

  if (!letter && !thingys && !bigLetter && !numberChars) {
    userChoice = alert("you realize you didnt select anything, right?");
    //4 choices
  } else if (letter && thingys && bigLetter && numberChars) {
    userChoice = letter.concat(numberChars, thingys, bigLetter);
    //3 choices
  } else if (letter && thingys && numberChars) {
    userChoice = letter.concat(thingys, numberChars);
  } else if (letter && bigLetter && thingys) {
    userChoice = letter.concat(bigLetter, thingys);
  } else if (letter && bigLetter && numberChars) {
    userChoice = letter.concat(bigLetter, numberChars);
  } else if (thingys && bigLetter && numberChars) {
    userChoice = thingys.concat(bigLetter, numberChars); 
    //2 choices
  } else if (letter && thingys) {
    userChoice = letter.concat(thingys);
  } else if (letter && bigLetter){
    userChoice = letter.concat(bigLetter);
  } else if (letter && numberChars){
    userChoice = letter.concat(numberChars);
  } else if (thingys && numberChars){
    userChoice = thingys.concat(numberChars);
  } else if (thingys && bigLetter){
    userChoice = thingys.concat(bigLetter);
  } else if (numberChars && bigLetter){
    userChoice = numberChars.concat(bigLetter);
    //1 choice
  } else if (lowerChars) {
    userChoice = letter;
  } else if (numberChars) {
    userChoice = numberChars; 
  } else if (thingys) {
    userChoice = thingys;
  } else if (bigLetter) {
    userChoice = bigLetter;
  }
  
  
  for (var i = 0; i < enter; i++) {
    var choices = userChoice[Math.floor(Math.random() * userChoice.length)];
    password.push(choices);
}
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
