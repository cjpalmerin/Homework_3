
var passwordElement = document.getElementById("password");
var generateButton = document.getElementById("generate")


generateButton.addEventListener("click", function(){
  passwordLength = prompt("How many characters do you want your password to be? Please choose between 8 and 128.") 
  /* for some reasonVSCode keeps telling me to delete the declaration of the variable
  whenever I try to use the var keyword. */

  yesNoLowercase = confirm("Do you want lowercase letters?");
  yesNoUppercase = confirm("Do you want uppercase letters?");
  yesNoNumbers = confirm("Do you want numbers?");
  yesNoSpecialCharacters = confirm("Do you want special characters?");

  yesLowercase = [ "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  yesUppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
  yesNumbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
  yesSpecialCharacters = ["!","?","@","#","$","%","^","&","*",":",";","~"]
  /* VSCode still keeps telling me to delete the declaration of the variable
  whenever I try to use the var keyword. */
  newPasswordBank = "";
  var alphabet = 'abcdefghijklmnopqrstuvwxyz';
  if (yesNoLowercase) {
    newPasswordBank+=yesLowercase;
  }
  if (yesUppercase) {
    newPasswordBank+=alphabet.toUpperCase();
  }
  if (yesNumbers) {
    newPasswordBank+=yesNumbers;
  }
  if (yesSpecialCharacters) {
    newPasswordBank+=yesSpecialCharacters;
  }
  newPasswordBank.split('').length // this would be 52
  var newPW = ''

  //console.log in each if else statement shows what you should expect based on options made. from prompts
  if (passwordLength <= 7 || passwordLength >= 129) {


    passwordElement.textContent = "Please enter a number between 8 - 128!"
    console.log("ERROR1!");

  }
  else if (passwordLength > 7 && passwordLength < 129 && yesNoLowercase === true && yesNoUppercase === true && yesNoNumbers === true && yesNoSpecialCharacters === true) {
   
    // console.log("ALL");

    for(var i=0; i< passwordLength; i++) {
      var charArray = newPasswordBank.split('');
      newPW+= charArray[Math.floor(Math.random() * charArray.length)]
    }

    passwordElement.textContent = newPW;

  }
  else if (passwordLength > 7 && passwordLength < 129 && yesNoLowercase === true && yesNoUppercase === true && yesNoNumbers === true && yesNoSpecialCharacters === false) {
    
    for(var i=0; i< passwordLength; i++) {
      var charArray = newPasswordBank.split('');
      newPW+= yesLowercase[Math.floor(Math.random() * yesLowercase.length)] + yesUppercase[Math.floor(Math.random() * yesUppercase.length)] + yesNumbers[Math.floor(Math.random() * yesNumbers.length)]
      }

    passwordElement.textContent = newPW;
    // console.log("lower+upper+numbers");
    
  }
  else if (passwordLength > 7 && passwordLength < 129 && yesNoLowercase === true && yesNoUppercase === true && yesNoNumbers === false && yesNoSpecialCharacters === false) {
    
    for(var i=0; i< passwordLength; i++) {
      var charArray = newPasswordBank.split('');
      newPW+= yesLowercase[Math.floor(Math.random() * yesLowercase.length)] + yesUppercase[Math.floor(Math.random() * yesUppercase.length)]
      }

    passwordElement.textContent = newPW;

    // console.log("lower+upper");
    
  }
  else if (passwordLength > 7 && passwordLength < 129 && yesNoLowercase === true && yesNoUppercase === false && yesNoNumbers === false && yesNoSpecialCharacters === false) {
    
    for(var i=0; i< passwordLength; i++) {
      var charArray = newPasswordBank.split('');
      newPW+= yesLowercase[Math.floor(Math.random() * yesLowercase.length)]
    }

    passwordElement.textContent = newPW;

    // console.log("lower");
    
  }
  else if (passwordLength > 7 && passwordLength < 129 && yesNoLowercase === true && yesNoUppercase === false && yesNoNumbers === true && yesNoSpecialCharacters === false) {
    
    for(var i=0; i< passwordLength; i++) {
      var charArray = newPasswordBank.split('');
      newPW+= yesLowercase[Math.floor(Math.random() * yesLowercase.length)] + yesNumbers[Math.floor(Math.random() * yesNumbers.length)]
      }

    passwordElement.textContent = newPW;
    // console.log("lower+number");
    
  }
  else if (passwordLength > 7 && passwordLength < 129 && yesNoLowercase === true && yesNoUppercase === false && yesNoNumbers === false && yesNoSpecialCharacters === true) {
    
    for(var i=0; i< passwordLength; i++) {
      var charArray = newPasswordBank.split('');
      newPW+= yesLowercase[Math.floor(Math.random() * yesLowercase.length)] + yesSpecialCharacters[Math.floor(Math.random() * yesSpecialCharacters.length)]
      }

    passwordElement.textContent = newPW;
    // console.log("lower+symbol");
    
  }
  else if (passwordLength > 7 && passwordLength < 129 && yesNoLowercase === false && yesNoUppercase === true && yesNoNumbers === false && yesNoSpecialCharacters === false) {
    
    for(var i=0; i< passwordLength; i++) {
      newPW+= yesUppercase[Math.floor(Math.random() * yesUppercase.length)]
    }
    passwordElement.textContent = newPW;

    // console.log("upper");
    
  }
  else if (passwordLength > 7 && passwordLength < 129 && yesNoLowercase === false && yesNoUppercase === true && yesNoNumbers === true && yesNoSpecialCharacters === false) {
    
    for(var i=0; i< passwordLength; i++) {
      var charArray = newPasswordBank.split('');
      newPW+= yesUppercase[Math.floor(Math.random() * yesUppercase.length)] + yesNumbers[Math.floor(Math.random() * yesNumbers.length)]
      }

    passwordElement.textContent = newPW;
    // console.log("upper+number");
    
  }
  else if (passwordLength > 7 && passwordLength < 129 && yesNoLowercase === false && yesNoUppercase === true && yesNoNumbers === true && yesNoSpecialCharacters === true) {
    for(var i=0; i< passwordLength; i++) {
      var charArray = newPasswordBank.split('');
      newPW+= yesUppercase[Math.floor(Math.random() * yesUppercase.length)] + yesNumbers[Math.floor(Math.random() * yesNumbers.length)] + yesSpecialCharacters[Math.floor(Math.random() * yesSpecialCharacters.length)]
      }

    passwordElement.textContent = newPW;
    // console.log("upper+number+symbol");
    
  } else if (passwordLength > 7 && passwordLength < 129 && yesNoLowercase === false && yesNoUppercase === true && yesNoNumbers === false && yesNoSpecialCharacters === true) {

    for(var i=0; i< passwordLength; i++) {
      var charArray = newPasswordBank.split('');
      newPW+= yesUppercase[Math.floor(Math.random() * yesUppercase.length)] + yesSpecialCharacters[Math.floor(Math.random() * yesSpecialCharacters.length)]
      }

    passwordElement.textContent = newPW;
    // console.log("upper+symbol")

  }
  else if (passwordLength > 7 && passwordLength < 129 && yesNoLowercase === false && yesNoUppercase === false && yesNoNumbers === true && yesNoSpecialCharacters === false) {

    for(var i=0; i< passwordLength; i++) {
      newPW+= yesNumbers[Math.floor(Math.random() * yesNumbers.length)]
    }
    passwordElement.textContent = newPW;
    // console.log("number")

  }
  else if (passwordLength > 7 && passwordLength < 129 && yesNoLowercase === false && yesNoUppercase === false && yesNoNumbers === true && yesNoSpecialCharacters === true) {

    for(var i=0; i< passwordLength; i++) {
      var charArray = newPasswordBank.split('');
      newPW+= yesNumbers[Math.floor(Math.random() * yesNumbers.length)] + yesSpecialCharacters[Math.floor(Math.random() * yesSpecialCharacters.length)]
      }

    passwordElement.textContent = newPW;
    // console.log("number+symbol")

  }
  else if (passwordLength > 7 && passwordLength < 129 && yesNoLowercase === false && yesNoUppercase === false && yesNoNumbers === false && yesNoSpecialCharacters === true) {

    for(var i=0; i< passwordLength; i++) {
      newPW+= yesSpecialCharacters[Math.floor(Math.random() * yesSpecialCharacters.length)]
    }
    passwordElement.textContent = newPW;
    // console.log("symbol")

  }
  else if (passwordLength > 7 && passwordLength < 129 && yesNoLowercase === false && yesNoUppercase === false && yesNoNumbers === false && yesNoSpecialCharacters === false) {
    passwordElement.textContent = "ERROR! Please say yes to at least one option!"
    // console.log("ERROR2!");
    
  }
}
)


// // Assignment Code
// var generateBtn = document.querySelector("#generate");


// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

//   generatePassword = Math.random().toString(36).slice(-8);

//   pass
// }



// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword); {
//   // passwordText.textContent =  

// }