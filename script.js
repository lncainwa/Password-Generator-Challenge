
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

  
}

// Add event listener to generate button

generateBtn.addEventListener("click", writePassword);



//This is the begining of our generatePassword method, you can also call it a function, the 
//terms are interchangable 
function generatePassword(){
  // Using the user input from the prompt boxes to set the values of userInput, userInput2,
  // and userInput3.
  var userInput = window.prompt("Enter a number between 8 and 128");
  var userInput2 = window.prompt("Do you want 'uppercase', 'lowercase', or 'both'?");
  var userInput3 = window.prompt("Would you like to include special characters? yes or no?")

  // defining the character set variable to be filled in later
  var chars = "";


//Checking if the user entered a valid number
if(userInput > 128){
  window.alert("The number you provided was too large!")
  return;// if this if statement is true, when it gets to 'return' it will fail the rest of the code
         // and display undefined
}else if(userInput < 8){
  window.alert("The number you entered is too small!"); // same here, if any of these 'if' statements are satisfied, if the number is too large or too
         // small, by executing the "return" statement it "Exits the method". The method we would be exiting is the 
         // method we are in right now called "generatePassword". when ever the compiler gets to a 
         // return statement it means 'exit the current method'. kind of like abort.
         // but if this if statement is not satisfied, if the number is within range then the compiler will never
         // get to the return statement.
}

//checking if the user gave a valid input. The choices are "uppercase", "lowercase", or "both"
//when one of the if statements are satisfied, Say the user inputs "uppercase", then we asign the uppercase
//alphabet to the variable 'chars'.
//if they enter lowercase then we assign the lower case alphabet to the variable 'chars'
//notice how on line 70 'chars' is declared but left blank. That is just so we can fill it up later 
//whenever the conditions we want are met, like the user entering uppercase,lowercase, or both. Once this condition
//has occured then we know what we want 'chars' to be equal to. we know what we want to assign to chars.
if( userInput2 == "uppercase"){
  var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
}else if(userInput2 == "lowercase"){
  var chars = "abcdefghijklmnopqrstuvwxyz"
}else if(userInput2 == "both"){
  var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
}else{
  window.alert("you must enter uppercase, lowercase, or both")//window.alert gives you a pop up with no text to input, just OK button
  return;//once again the retun statement. Here it is saying if none of the 3 options are satisfied then 
        //show an alert window with the message "you did not enter valid text", then using the return statement, exit the method.
        //it says Undefined because the method was never fully executed so there is no output from the method
        //the output would be the password that is generated.
}


//here we are just checking if the user entered 'yes' or 'no'. If yes then we take what 'chars' already is;
//say the user had entered "uppercase" previously. then 'chars' value would be the uppcase alphabet.
//so what we want to do is add to that. to INCLUDE special characters, not to redefine the variable
//'chars' with just special characters. that is why here we say ' var chars = chars + "!@#$%^&*"; '
//we are just adding special characters to whatever was already there. In other words concatenating the two strings.
//One being the alphabet, the other is the special chars.
if( userInput3 == "yes"){
  var chars = chars + "!@#$%^&*";
}else if(userInput3 == "no"){
  var chars = chars;
}else{
  window.alert("You need to enter yes or no")
  return;
}


  var passwordLength = userInput; //length of password equals whatever number the user gave between 8 and 128
  var returnValue = ""; // this is just a place holder, it will be filled up, just like how we did 'chars' on line 70
  var n = chars.length; //n is equal to how many characters long the variable 'chars' is. for example it could be 
                        //shorter if the user chose not to include special characters
  for (let i = 0; i < passwordLength; i++) { //here we are saying we want to iterate from 0 to the length the user chose.
    returnValue += chars.charAt(Math.floor(Math.random() * n)); 
  }                                                             
                                          
  return returnValue;                                           
                                
      
}                                                               








