// First... an exercise.

// function generatePyramid(size){
// 	var result = "";

// 	for(var i = 0; i <= size; i++){
// 		result += "#";
// 		console.log(result);
// 	}
// }

// generatePyramid(50);


//////////////////////////////////////////////////////////////////////////////////////////////


// PROTOTYPES

// function Person(firstName, lastName){
// 	this.firstName = firstName;
// 	this.lastName = lastName;
// }

// Person.prototype.hello = function(line){
// 	alert(this.firstName + " " + this.lastName + " says " + line);
// }

// var Mario = new Person("Mario", "Petkovski");
// var Pero = new Person("Pero", "Perovski");
// var Marija = new Person("Marija", "Marievska");
// Mario.hello("Hello World.");
// Pero.hello("Zdravo svetu");
// Marija.hello("Hello Javascript");
// console.log(Mario);

// function Teacher(firstName, lastName, gender, subject){
// 	this.firstName = firstName;
// 	this.lastName = lastName;
// 	this.gender = gender;
// 	this.subject = subject;
// }

// Teacher.prototype.welcome = function(){
// 	if(this.gender == "male" || this.gender == "m"){
// 		console.log("Welcome Mr." + this.firstName + " " + this.lastName + ". We can't wait for you to start teaching " + this.subject + ".");
// 	}else if(this.gender == "female" || this.gender == "f"){
// 		console.log("Welcome Mrs." + this.firstName + " " + this.lastName + ". console.logWe can't wait for you to start teaching " + this.subject + ".");
// 	}else{
// 		console.log("Welcome Mx." + this.firstName + " " + this.lastName + ". We can't wait for you to start teaching " + this.subject + ".");
// 	}
// }

// var teacher_01 = new Teacher("Mario", "Petkovski", "male", "hustling");
// teacher_01.welcome();


// function House(symbol, motto){
// 	this.symbol = symbol;
// 	this.motto = motto;
// 	this.lord = undefined;
// }

// function Person(name){
// 	this.name = name;
// 	this.children = null;
// 	this.parent = null;
// }

// House.prototype.battle = function(house_01, house_02){
// 	console.log(house_01 + " and " + house_02 + " battled and " + house_02 + " won.");
// }

// var Lannister = new House("Lion", "The Lannisters always pay their debts!");
// var Tywin = new Person("Tywin");
// var Tyrion = new Person("Tyrion");
// var Cersei = new Person("Cersei");
// var Jamie = new Person("Jamie");
// var Joffrey = new Person("Joffrey");
// var Myrcella = new Person("Myrcella");
// var Tommen = new Person("Tommen");

// Lannister.lord = Tywin;
// Tywin.children = [Tyrion, Cersei, Jamie];
// Jamie.parent = Tywin;
// Cersei.parent = Tywin;
// Tyrion.parent = Tywin;
// Cersei.children = [Myrcella, Joffrey, Tommen];
// Myrcella.parent = Cersei;
// Tommen.parent = Cersei;
// Joffrey.parent = Cersei;

// var Starks = new House("Wolf", "Winter is coming!");
// var Jon = new Person("Jon Snow");
// var Sansa = new Person("Sansa");
// var Arya = new Person("Arya");
// Starks.lord = Jon;

// Lannister.battle(Lannister.lord.name, Starks.lord.name);


//////////////////////////////////////////////////////////////////////////////////////////////


// CLASSES

// class User {
// 	constructor(firstName, lastName){
// 		this.firstName = firstName;
// 		this.lastName = lastName;
// 	}

// 	sayHi(line){
// 		console.log(line + this.firstName + " " + this.lastName + ".");
// 	}

// }

// var Mario = new User("Mario", "Petkovski");
// Mario.sayHi("Hello I'm ");
// console.log(Mario);

// var Rectangle = class {
// 	constructor(width, height){
// 		this.width = width;
// 		this.height = height;
// 	}

// 	calcArea(){
// 		return this.width * this.height;
// 	}

// 	get _calcArea(){
// 		return this.calcArea();
// 	}
// }

// var kocka = new Rectangle(121, 1225);
// console.log(kocka._calcArea);

// class DatePicker {
// 	constructor(year, month, day){
// 		this.year = year;
// 		this.month = month;
// 		this.day = day;
// 	}

// 	addDays(days){
// 		return this.day += days;
// 	}
// }

// var today = new DatePicker(2017, 12, 4);
// today.addDays(5);

// console.log(today);

// class Teacher {
// 	constructor(firstName, lastName){
// 		this.firstName = firstName;
// 		this.lastName = lastName;
// 	}

// 	greeting(){
// 		console.log("Hello I'm " + this.firstName + " " + this.lastName + ".");
// 	}

// }

// var theTeacher = new Teacher("Mario", "Petkovski");
// theTeacher.greeting();

// class UniTeacher extends Teacher {
// 	constructor(firstName, lastName, university, subject){
// 		super(firstName, lastName);
// 		this.university = university;
// 		this.subject = subject;
// 	}

// 	welcomeMessage(){
// 		console.log(this.firstName + " " + this.lastName + " will be teaching " + this.subject + " at " + this.university  + ".");
// 	}
// }

// var universityTeacher = new UniTeacher("Mario", "Petkovski", "The Streets", "Hustling");
// universityTeacher.welcomeMessage();


class Employee {
	constructor(name, age, salary, tasks){
		this.name = name;
		this.age = age;
		this.salary = salary;
		this.tasks = [];
	}

	work(){
		var currentTask = this.tasks.shift();
		console.log(this.name + currentTask);
		this.tasks.push(currentTask);
	}

	collectSalary(){
		console.log(this.name + " received " + this.getSalary + " this month.");
	}

	get getSalary(){
		return this.salary;
	}
}

class JuniorEmployee extends Employee {
	constructor(name, age, salary, tasks){
		super(name, age, salary, tasks);
		this.tasks.push(" is working on a simple task");
	}
}

class SeniorEmployee extends Employee {
	constructor(name, age, salary, tasks){
		super(name, age, salary, tasks);
		this.tasks.push(" is working on a complicated task");
	}
}

class Manager extends Employee {
	constructor(name, age, salary, tasks){
		super(name, age, salary, tasks);
		this.tasks.push(" fired someone!");
	}
}

var Mario = new JuniorEmployee("Mario Petkovski", 99, 25000);
Mario.work();
Mario.collectSalary();

var Dimitar = new SeniorEmployee("Dimitar Atanasov", 99, 50000);
Dimitar.work();
Dimitar.collectSalary();

var Bojan = new Manager("Bojan Gavrovski", 99, 1000000);
Bojan.work();
Bojan.collectSalary();




























