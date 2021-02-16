//Authors: Brian Quintero and Cheston Chen
//Lab 10
//JavaScript Events and Forms

var outputEl = document.getElementById("output");
var userNameEl = document.getElementById("user-name");
var myButton = document.getElementById("my-button");

myButton.addEventListener("click", scrambleName);

function scrambleName(){
  var name = userNameEl.value;
  name = name.toLowerCase().split("").sort().join("");
  outputEl.innerText = name;
}
