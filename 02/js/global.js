
// Objects
// var myFirstObject = {firstName: "Mario", lastName: "Petkovski", favoriteAuthor: "David Foster Wallace"};

// console.log("Jas sum " + myFirstObject.firstName + " " + myFirstObject.lastName + " i mojot omilen avtor e " + myFirstObject.favoriteAuthor + ".");

// var yearScale = {5: "Baby", 100: "Old"};
// console.log(yearScale);
// console.log(yearScale["5"]);

// var person = "Kobe";
// var anotherPerson = person;

// person = "Bryant";
// console.log(anotherPerson);
// console.log(person);

// var person = {name: "Kobe"};
// var anotherPerson = person;

// person.name = "Bryant";

// console.log(anotherPerson.name);
// console.log(person.name);

// var mango = new Object();
// mango.color = "yellow";
// mango.shape = "round";
// mango.sweetnessLevel = 8;

// console.log(mango);
// console.log(mango.sweetnessLevel);
// delete mango.sweetnessLevel;
// console.log(mango.sweetnessLevel);
// console.log(mango);

// for in

// var book = {
// 	name: "Infinite Jest",
// 	year: 1994,
// 	author: "David Foster Wallace",
// 	genre: "Satire",
// 	awards: 506
// }

// console.log(book);

// for(var x in book){
// 	console.log(book[x]);
// }

// for loop

// for(var i = 0; i <= 10; i++){
// 	console.log("Current count is " + i);
// }

// for(var i = 5; i <= 100; i+=5){
// 	console.log("Current count is " + i);
// }

// for(var i = 100; i >= 0; i-=10){
// 	console.log("Current count is " + i);
// }

// var names = ["mario", "dimitar", "bojan", "kristina", "kristijan", "tomislav", "dejan", "martina", "marija", "jovan"];

// for(var i = 0; i < names.length; i++){
// 	if(names[i].length == 5){
// 		console.log(names[i]);
// 	}
// }

// while loop
// var i = 0;
// while(i <= 5){
// 	console.log("Current count is " + i);
// 	i++;
// }

// do while loop
// var i = 0;
// do{
// 	console.log("Current count is " + i);
// 	i++;
// }while(i <= 5);

// Functions

// function firstFunction(){
// 	console.log("Hello World");
// }

// firstFunction();

// function hello(){
// 	return "Hello World";
// }

// console.log(hello());
// var num_01 = 5;
// var num_02 = 5;

// function multiplier(){
// 	return num_01 * num_02;
// }

// console.log(multiplier());

// function divider(num01, num02){
// 	return num01 / num02;
// }

// console.log(divider(10, 2));


// function dogCalculator(age){
// 	console.log("Tvoete kuce ima " + age * 7 + " kuceski godini.");
// }

// dogCalculator(5);

// var drawing = function(){
// 	var result = "";

// 	var ground = function(size){
// 		for(var i = 0; i < size; i++){
// 			result += "_";
// 		}
// 	}

// 	var peaks = function(size){
// 		result += "/";
// 		for(var i = 0; i < size; i++){
// 			result += "'";
// 		}
// 		result += "\\";
// 	}

// 	ground(5);
// 	peaks(3);
// 	ground(10);
// 	peaks(7);
// 	ground(4);
// 	peaks(10);
// 	ground(12);
// 	return result;	
// }

// console.log(drawing());

// console.log("Mario says ", helloWorld());

// function helloWorld(){
// 	return "Hello World";
// }

// function oddOrEven(num){
// 	if(num % 2 === 0){
// 		console.log(num + " is even");
// 	}else{
// 		console.log(num + " is odd");
// 	}
// }

// oddOrEven(10);

// Anonymous Callback function
// var cars = ["fico", "fiat", "zastava"];

// cars.forEach(function(item, idx){
// 	console.log(item + " at index number " + idx);
// });

// var first = function(){
// 	setTimeout(function(){
// 		console.log(1);
// 	}, 1000);
// }

// var second = function(){
// 	console.log(2);
// }

// first();
// second();

// function greeting(name){
// 	alert("Hello " + name + ".");
// }

// function processUser(callback){
// 	var name = prompt("What's your name?");
// 	callback(name);
// }

// processUser(greeting);

// Write a function called CountBs that takes a string as an arguement and returns a number that shows how many uppercase "B" are in the string; RESEARCH GOOGLE (charAt());

// Write a function that takes two arguments and return their minimum RESEARCH GOOGLE (Math.min());



