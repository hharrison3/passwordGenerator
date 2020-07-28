// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var passwordLength = prompt("How long do you want your password? (Choose a number between 8 and 128)");
  passwordLength = parseInt(passwordLength);

  var userLowecase = confirm("Do you want lowecase Characters?");
  var userUppercase = confirm("Do you want uppercase Characters?");
  var userNumeric = confirm("Do you want numeric Characters?");
  var userSpecial = confirm("Do you want special Characters?");

  const lowecaseCharacters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  const uppercaseCharacters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
  const numericCharacters = ['0','1','2','3','4','5','6','7','8','9'];
  const specialCharacters = ['!','@','#','$','%','^','&','*'];

  function generatePassword() {
    var word = lowecaseCharacters[4];
    return(word);
  }
  
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
