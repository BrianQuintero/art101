//Cheston Chen & Brian Quintero
//Lab 12
//Conditionals
//2/18/2021
var userNameEl = document.getElementById("input");
var button = document.getElementById("myButton");
var outputEl = document.getElementById("output");

myButton.addEventListener("click", function(){
  var userName = userNameEl.value;
  console.log(sortingHat(userName));
  outputEl.innerHTML = "<p>You have been placed in house " + sortingHat(userName) + "</p>";
});

function sortingHat(str) {
  var length = str.length;
  var remain = length % 4;
  var house;
  if(remain == 0 ) {
    house = "Gryffinder";
  } else if(remain == 1){
    house = "Ravenclaw";
  } else if(remain == 2) {
    house = "Hufflepuff";
  } else if(remain == 3) {
    house = "Slytherin";
  }
  return house;
}
