
var generateBtn = document.querySelector("#generate");

// Adding password criteria : adding array for uppercase,lowercase,special chaeacters and numbers.

function generatePassword() {

var uppercaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowercaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o",  "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var specialCharacterArray = ["@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+"];
var numberArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];


// adding new array result and user
 
var resultArray = [];
var userArray = [];

//ask user for the length,number,uppercase,lowercase and special character on their password
  var numCharacter = prompt ("How much number of Character you want between 8 and 128?");
  var uppercases = confirm ("you want Uppercases in your password?");
  var lowercases = confirm ("you want lowercases in your password?");
  var specialCharacters = confirm ("you want special characters in your password?");
  var numbers = confirm ("you want numbers in your password?");

// condition apply to the array

if (uppercases){
  resultArray = resultArray.concat(uppercaseArray);

}

if (lowercases){
  resultArray = resultArray.concat(lowercaseArray);

}

if (specialCharacters){
  resultArray = resultArray.concat(specialCharacterArray);
}

if (numbers){
  resultArray = resultArray.concat(numberArray);
}
//console log for result array
console.log(resultArray)

//for (i = 0; i < questions.length; i++);  use array push method
for (var i = 0; i < numCharacter; i++) {
      
  userArray.push (resultArray[Math.floor(Math.random() * resultArray.length)]); 
  }

  return userArray.join("") ;
}
//apply all variables
// ask length
// ask 8 < length < 128
// confirm upperCase
// confirm lowerCase
// confirm specialCHaracters
//confirm numeric


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);