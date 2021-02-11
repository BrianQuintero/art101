//Authors: Brian Quintero and Cheston Cheston
//Lab 9
//JavaScipt for the Web


var outputEl = document.getElementById("output");

var new1El = document.createElement("p");
new1El.innerHTML = "Testing: one, two three";

var new2El = document.createElement("div");
new2El.innerText = "I'm alive!";

outputEl.appendChild(new1El);
outputEl.appendChild(new2El);
