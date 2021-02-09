//Cheston Chen & Brian Quintero
//Lab 8
//Anon Functions and Callbacks
//2/8/2021

function firstThing(test) {
  console.log(test + " This first thing is running.");
}

function secondThing(test) {
  console.log(test + " This second thing is running.");
}

function thirdThing(test) {
  console.log(test + " This third thing is running.");
}
//Test 1
firstThing("Test 1");
secondThing("Test 1");
thirdThing("Test 1");

//Test 2
var test2 = function (x, y, z) {return x, y, z};
test2 = firstThing("Test 2"), secondThing("Test 2"), thirdThing("Test 2");

//Test 3
setTimeout(function(){
  firstThing("Test 3");
}, 3000);
setTimeout(function(){
  secondThing("Test 3");
}, 1000);
setTimeout(function() {
  thirdThing("Test 3");
}, 2000);
