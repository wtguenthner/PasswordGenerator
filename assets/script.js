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
    // var passwordLength = (prompt("Enter length of password between 8 and 128 characters:"));
    generatePassword();
  }

  var randomPassword=[];
  var i=0;
  var numberConfirm = (prompt("Would you like numbers in your password? Type y/n"));
    
//Confirms if user wants numbers in their password.
 while(i<1){
    if(numberConfirm === 'y'){
      randomPassword = randomPassword.concat(numbers);
      i++;
    }else if(numberConfirm === 'n'){
  
      i++;
    }else{
      alert("Invalid input. Please type y/n");
      var numberConfirm = (prompt("Would you like numbers in your password? Type y/n"));
    }
 }
 //Resets iterator 
var i=0;
var characterConfirm = (prompt("Would you like characters in your password? Type y/n"));

//Confirms if user wants characters in their password.
 while(i<1){
  if(characterConfirm === 'y'){
    randomPassword = randomPassword.concat(characters);
    i++;
  }else if(characterConfirm === 'n'){
  
    i++;
  }else{
    alert("Invalid input. Please type y/n");
    var characterConfirm = (prompt("Would you like characters in your password? Type y/n"));
    
  }
}

//Resets iterator
i=0;


var upperConfirm = (prompt("Would you like upper case letters in your password? Type y/n"));
//Confirms if user wants upper case letters in their password
while(i<1){
  if(upperConfirm === 'y'){
    randomPassword = randomPassword.concat(upper);
    i++;
  }else if(upperConfirm === 'n'){
  
    i++;
  }else{
    alert("Invalid input. Please type y/n");
    var upperConfirm = (prompt("Would you like upper case letters in your password? Type y/n"));
    
  }
}

//Resets iterator
i=0;

//Confirms if user wants lower case letters in their password
var lowerConfirm = (prompt("Would you like lower case letters in your password? Type y/n"));
while(i<1){
  if(lowerConfirm === 'y'){
    randomPassword = randomPassword.concat(lower);
    i++;
  }else if(lowerConfirm === 'n'){
  
    i++;
  }else{
    alert("Invalid input. Please type y/n");
    var lowerConfirm = (prompt("Would you like lower case letters in your password? Type y/n"));
    
  }
}
//Gives an alert message if no password parameter is selected, restarts the function if so
if(numberConfirm === 'n' && characterConfirm === 'n' && upperConfirm === 'n' && lowerConfirm === 'n'){
  alert("Please select at least one password paramter");
 generatePassword();

}
var finalPassword = "";
//Randomly selects a single character from the randomPassword string created. Loops and adds an additional
//character to it for the value of passwordLength
for(var x=0; x < passwordLength; x++){
  finalPassword = finalPassword + randomPassword[Math.floor(Math.random() * randomPassword.length)];
 
  }
  

return finalPassword;
   
}

