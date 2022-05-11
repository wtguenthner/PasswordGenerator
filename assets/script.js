// Assignment code here
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var characters = ["+", "?", "!", "*", "#", "$", "%", ">", "<", ".", "/", "=", "~"];
var upper= ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P","Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lower= ["a", "b", "c", "d", "e", "f","g","h", "i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

var numberConfirm;
var characterConfirm;
var upperConfirm;
var lowerConfirm;
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword(){

  var passwordLength = (prompt("Enter length of password between 8 and 128 characters:"));

  while(passwordLength > 128 || passwordLength < 8){
    alert("Please enter a password length between 8 and 128 characters")
    var passwordLength = (prompt("Enter length of password between 8 and 128 characters:"));
  }
  //Checks if input is a number and loops if it isn't
  while(isNaN(passwordLength)){
    alert("Invalid input. Must use a number")
    var passwordLength = (prompt("Enter length of password between 8 and 128 characters:"));
  }

  var randomPassword=[];
  var i=0;
  var numberConfirm = (prompt("Would you like numbers in your password? Type Y/N"));
    
//Confirms if user wants numbers in their password.
 while(i<1){
    if(numberConfirm === 'Y'){
      randomPassword = randomPassword.concat(numbers);
      i++;
    }else if(numberConfirm === 'N'){
  
      i++;
    }else{
      alert("Invalid input. Please type Y/N");
      var numberConfirm = (prompt("Would you like numbers in your password? Type Y/N"));
    }
 }
 //Resets iterator 
var i=0;
var characterConfirm = (prompt("Would you like characters in your password? Type Y/N"));

//Confirms if user wants characters in their password.
 while(i<1){
  if(characterConfirm === 'Y'){
    randomPassword = randomPassword.concat(characters);
    i++;
  }else if(characterConfirm === 'N'){
  
    i++;
  }else{
    alert("Invalid input. Please type Y/N");
    var characterConfirm = (prompt("Would you like characters in your password? Type Y/N"));
    
  }
}




   
}

