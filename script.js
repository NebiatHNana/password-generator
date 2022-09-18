// Assignment code here
var UppCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var number = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var special = ['"', "!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"];
var prePassword = [];
var finalPassword = [];


var combine = function (confirm, combine) {
    if (confirm) {
        prePassword = prePassword.concat(combine);
    }
}

var PassWordGenerator = function () {


    var passLenght = prompt("How long do you want the password to be? The minimum is 8, Please pick a number between 8 and 128");
    if (!passLenght || passLenght < 8 || passLenght > 128) {
        window.alert("Please pick a number between 8 and 128!");
        return PassWordGenerator();
    }


    var upperConf = confirm("Do you want add uppercase letters to your password?");
    var lowerConf= confirm("Do you want to add lowerCase letters to your password?");
    var numberConf = confirm("Do you want to add numbers to your password?");
    var specialConf = confirm("Do you like to add special characters to your password?");


    if (!(upperConf || lowerConf|| numberConf || specialConf)) {
        window.alert("You must pick one of the options.");
        return PassWordGenerator();
    };

    combine(upperConf, UppCase);
    combine(lowerConf, lowCase);
    combine(numberConf, number);
    combine(specialConf, special);


    while (finalPassword.length < passLenght) {
        random = prePassword[Math.floor(Math.random() * prePassword.length)];
        finalPassword = finalPassword + random;
    };
}


var reset = function () {
    finalPassword = []
}

console.log(finalPassword);

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {

  PassWordGenerator();

  var password = finalPassword;
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  reset();
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
