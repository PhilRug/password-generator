// Assignment code here
var lowerChars;
var symbol;
var bigLetter;
var numberChars;
var buttonPress;

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

  if (!lowerChars && !symbol && !bigLetter && !numberChars) {
    userChoice = alert("you realize you didnt select anything, right?");
    //4 choices
  } else if (lowerChars && symbol && bigLetter && numberChars) {
    userChoice = letter.concat(numbers, thingys, bigLetter);
    //3 choices
  } else if (lowerChars && symbol && numberChars) {
    userChoice = letter.concat(thingys, numbers);
  } else if (lowerChars && bigLetter && symbol) {
    userChoice = letter.concat(bigLetter, thingys);
  } else if (lowerChars && bigLetter && numberChars) {
    userChoice = letter.concat(bigLetter, numbers);
  } else if (symbol && bigLetter && numberChars) {
    userChoice = thingys.concat(bigLetter, numbers); 
    //2 choices
  } else if (lowerChars && symbol) {
    userChoice = letter.concat(thingys);
  } else if (lowerChars && bigLetter){
    userChoice = letter.concat(bigLetter);
  } else if (lowerChars && numberChars){
    userChoice = letter.concat(numbers);
  } else if (symbol && numberChars){
    userChoice = thingys.concat(numbers);
  } else if (symbol && bigLetter){
    userChoice = thingys.concat(bigLetter);
  } else if (numberChars && bigLetter){
    userChoice = numbers.concat(bigLetter);
    //1 choice
  } else if (lowerChars) {
    userChoice = letter;
  } else if (numberChars) {
    userChoice = numbers; 
  } else if (symbol) {
    userChoice = thingys;
  } else if (bigLetter) {
    userChoice = bigLetter;
  };
  
  
  for (var i = 0; i < enter; i++) {
    var passFinal = userChoice[Math.floor(Math.random() * userChoice.length)];
    password.push(passFinal);
}
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
