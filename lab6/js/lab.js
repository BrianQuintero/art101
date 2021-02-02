//Cheston Chen & Brian Quintero
//Lab 6
//Arrays and Objects
//1/31/2021

var carMake = "Toyota";
var carModel= "Matrix";
var carColor= "Light blue";
var carYear= 2008;
var age = 2020 - carYear;
var myTransport = ["car", "bus", "parent's car"];
var myMainRide = {carMake, carModel, carColor, carYear, age};

document.writeln("I use my " + myTransport[0] + " to get around." + "<br>");
document.writeln("My Main Ride: <pre>",
    JSON.stringify(myMainRide, null, '\t'), "</pre>");
