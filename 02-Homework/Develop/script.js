// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var passwordLength = prompt("How long do you want your password? (Choose a number between 8 and 128)");
  passwordLength = parseInt(passwordLength);

  var userLowercase = confirm("Do you want lowecase Characters?");
  var userUppercase = confirm("Do you want uppercase Characters?");
  var userNumeric = confirm("Do you want numeric Characters?");
  var userSpecial = confirm("Do you want special Characters?");

  const lowercaseCharacters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  const uppercaseCharacters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
  const numericCharacters = ['0','1','2','3','4','5','6','7','8','9'];
  const specialCharacters = ['!','@','#','$','%','^','&','*'];

  var charCount = 0;
  if (userLowercase === true){
    charCount++
  }
  if (userUppercase === true){
    charCount++
  }
  if (userNumeric === true){
    charCount++
  }
  if (userSpecial === true){
    charCount++
  }
  console.log(charCount);


  function generatePassword() {
    var word = [];

    if (userLowercase=== true){
      for (var i=0;i<passwordLength/charCount;i++){
        word.push(lowercaseCharacters[Math.floor(Math.random() * lowercaseCharacters.length)]);
      }
    };
    if (userUppercase=== true){
      for (var i=0;i<passwordLength/charCount;i++){
        word.push(uppercaseCharacters[Math.floor(Math.random() * uppercaseCharacters.length)]);
      }
    };
    if (userNumeric=== true){
      for (var i=0;i<passwordLength/charCount;i++){
        word.push(numericCharacters[Math.floor(Math.random() * numericCharacters.length)]);
      }
    };
    if (userSpecial=== true){
      for (var i=0;i<passwordLength/charCount;i++){
        word.push(specialCharacters[Math.floor(Math.random() * specialCharacters.length)]);
      }
    };
    while(word.length != passwordLength){
      word.pop()
    }
      
    console.log(word.length)
    console.log(passwordLength)

    return(word);
  }
  
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// for loop adding random elements of each wanted character list to a new array
// then for loop taking random elements of new array and adding them to word var
// return word
// var item = items[Math.floor(Math.random() * items.length)];
