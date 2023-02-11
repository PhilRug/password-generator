// Assignment code here
var letter = ["abcdefghijklmnopqrstuvwxyz".split('')];
var numberChars = ["0123456789".split('')];
var thingys = ["!@#$%^&*()".split('')];
var bigLetter = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('')];
var userChoice;

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword() {
}

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    let enter = parseInt(prompt("How many characters would you like your password to be?"));
    if (!enter) {
        alert("I thought you wanted a password!");
        return;
    } else if (enter < 8 || enter > 128) {
        alert("You must choose between 8 and 128");
        return;
    } else {
        choiceLetter = confirm("Will this contain Lowercase letters?");
        choiceToUpper = confirm("Will this contain Uppercase letters?");
        choiceNumberChars = confirm("Will this contain numberChars?");
        choiceThingys = confirm("Will this contain special characters?");
    };

    if (!choiceLetter && !choiceThingys && !choiceToUpper && !choiceNumberChars) {
        userChoice = alert("you realize you didnt select anything, right?");
        //4 choices
    } else if (choiceLetter && choiceThingys && choiceToUpper && choiceNumberChars) {
        var userChoice = letter.concat(numberChars, thingys, bigLetter);
        //3 choices
    } else if (choiceLetter && choiceThingys && choiceNumberChars) {
        var userChoice = letter.concat(thingys, numberChars);
    } else if (choiceLetter && choiceToUpper && choiceThingys) {
        var userChoice = letter.concat(bigLetter, thingys);
    } else if (choiceLetter && choiceToUpper && choiceNumberChars) {
        var userChoice = letter.concat(bigLetter, numberChars);
    } else if (choiceThingys && choiceToUpper && choiceNumberChars) {
        var userChoice = thingys.concat(bigLetter, numberChars);
        //2 choices
    } else if (choiceLetter && choiceThingys) {
        userChoice = letter.concat(thingys);
    } else if (choiceLetter && choiceToUpper) {
        userChoice = letter.concat(bigLetter);
    } else if (choiceLetter && choiceNumberChars) {
        userChoice = letter.concat(numberChars);
    } else if (choiceThingys && choiceNumberChars) {
        userChoice = thingys.concat(numberChars);
    } else if (choiceThingys && choiceToUpper) {
        userChoice = thingys.concat(bigLetter);
    } else if (choiceNumberChars && choiceToUpper) {
        userChoice = numberChars.concat(bigLetter);
        //1 choice
    } else if (choiceLetter) {
        userChoice = letter;
    } else if (choiceNumberChars) {
        userChoice = numberChars;
    } else if (choiceThingys) {
        userChoice = thingys;
    } else if (choiceToUpper) {
        userChoice = bigLetter;
    };


    for (var i = 0; i < enter; i++) {
        var passFinal = userChoice[Math.floor(Math.random() * userChoice.length)];

    }
    var passwordText = document.querySelector("#password");

    passwordText.value = passFinal;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
