// Assignment code here
var lowerChars = "abcdefghijklmnopqrstuvwxyz";
var symbols = "!@#$%^&*()";
var upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numberChars = "0123456789";


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passFinal = parseInt(passLength);
  
  passwordText.value = password;
if (confirm("Would you like to randomize a password?") == true) {
    passLength = prompt("How many characters would you like your password to be?");
    document.getElementById("password").value = password;
function randomLower() {
        lowerChars(Math.floor(Math.random() * lowerChars.length))
    }
    lowerChars.confirm("do you want to use lower characters?")
    if (lowerChars === true) {
      password.push()
  }
}

function randomUpper() {
    upperChars(Math.floor(Math.random() * upperChars.length))
}



if (upperChars === true) {
    password.push()
}
function randomSymbols() {
    symbols(Math.floor(Math.random() * symbols.length))
}
if (symbols === true) {
    password.push()
}
function randomNumber() {
    numberChars(Math.floor(Math.random() * numberChars.length))
}
if (numberChars === true) {
    password.push()
}
}
for (var i = 0; i <= writePassword; i++) {
    var generatePassword = Math.floor(Math.random() * chars.length);
    password += chars.substring(randomNumber, randomNumber +1);
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
    var passwordString = "";
}

generateBtn.onclick = function() {
    prompt("How many characters do you want?")
}
