//Authors: Cheston Chen & Brian Quintero
//Date: February 25, 2021
//Lab 13 - Conditionals

//setting variables for elements
var listLength = document.getElementById("length");
var userNum1El = document.getElementById("num1");
var userText1El = document.getElementById("text1");
var userNum2El = document.getElementById("num2");
var userText2El = document.getElementById("text2");
var userNum3El = document.getElementById("num3");
var userText3El = document.getElementById("text3");
var userNum4El = document.getElementById("num4");
var userText4El = document.getElementById("text4");
var outputEl = document.getElementById("output");
//variables for the actual values (there's certainly an easier way to do this)
var uN1;
var uT1;
var uN2;
var uT2;
var uN3;
var uT3;
var uN4;
var uT4;

var buttonEl = document.getElementById("submit");

//button call
buttonEl.addEventListener("click", function(){
  uN1 = userNum1El.value;
  uT1 = userText1El.value;
  uN2 = userNum2El.value;
  uT2 = userText2El.value;
  uN3 = userNum3El.value;
  uT3 = userText3El.value;
  uN4 = userNum4El.value;
  uT4 = userText4El.value;
  numbers(listLength.value);
});

//function we're calling
function numbers(str) {
  console.log(str);
  var lineOutput = "";
  for(var i = 0; i < str; i++){
    lineOutput = i + ": ";
    if(i % uN1 == 0){
      lineOutput = lineOutput + uT1;
    }
    if(i % uN2 == 0){
      lineOutput = lineOutput + uT2;
    }
    if(i % uN3 == 0){
      lineOutput = lineOutput + uT3;
    }
    if(i % uN4 == 0){
      lineOutput = lineOutput + uT4;
    }
    $("#output").append("<p>" + lineOutput + "</p>");
  }
}
