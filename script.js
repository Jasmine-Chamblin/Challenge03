// Assignment Code (question: how to get promt box in the html/js pages and how to connect them with functions/variables)
var generateBtn = document.querySelector("#generate");
console.log(generateBtn)
alert("Please click 'Generate Password' to begin building your customized password!");

//Building Arrays for possible characters
var upperCaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var lowerCaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
var specialCharacters = ["@", "#", "$", "%", "!0"]
//holder arrays
var allInputs = []


//Prompt user for input
function userPrompt() {

  //Characters
  window.confirm("Are you okay with using the following characters in your password? @#$%!")
  //upper vs lowercase
  window.confirm("Are you okay with upper and lowercase latters in your password?")
  //Character count
  var lengthPass = prompt("Please enter your password length");
  //vaildate password length
  if (lengthPass > 128) {
    alert("Password is too long. It must be between 8-128 characters.")
  } if (lengthPass < 8) {
    alert("password is too short. It must be between 8-128 Characters.")
  }
  return;

}


function generatePassword() {
  console.log("click")
  var generatedPassword = ("generated password");

  //function not functioning:(
  //(x=0 x < lengthPass; x++);{
  //allInputs = selections[Math.floor(Math.random()) *selections.length)]
  //password = allInputs[Math.floor(Math.random() allInputs.length)]
  //randomPass += password}
  //return;
}
userPrompt();



// Write password to the #password input
function writePassword() {
  var password = generatePassword();




  generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword)