// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var generatedPassword = "generated password";
  console.log("clicket generate password");
  var lengthPass = prompt("Please enter your password length");
  var LowerChar = confirm("Do you want lower case characters?")
  var chars = "#^&*%#".split("")

  generatePassword = 
return generatedPassword

}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
generateBtn.addEventListener("click",)