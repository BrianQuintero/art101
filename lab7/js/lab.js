//Created function that pops up message and gets user input.
function userInput() {
  var userName = window.prompt("Please enter your name.");//The text that pops up.
  document.writeln("This is your name in alphabetical order: " + userName.toLowerCase().split("").sort().join(""));
  //Prints the user's text in alphabetical order.
}
userInput();//Calling the function.
