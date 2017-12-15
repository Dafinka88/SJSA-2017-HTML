// // Local storage


// // set item in local storage
// localStorage.setItem("name","Dafinka");

// // gets the item
// var name = localStorage.getItem("name");
// console.log(name);



// // remove the item
// localStorage.removeItem("name");


// var person = {firstName:"Dafinka",lastName:"Pechorova"};
// localStorage.setItem("person",JSON.stringify(person));

// var data = JSON.parse(localStorage.getItem("person"));

// // console.log(data);
// for(var x in data){
// 	console.log(data[x])
// }
// localStorage.removeItem("person");




// To do app

// function getTodos(){
// 	var todos = [];
// 	var todos_value = localStorage.getItem("todo");
// 	if(todos_value !==null){
// 		todos = JSON.parse(todos_value);
// 	}
// 	return todos;
// }
// function AddToDo(){
// 	var todo = document.getElementById("todo_src").value;
// 	var todos = getTodos();
// 	todos.push(todo);

// 	localStorage.setItem("todo",JSON.stringify(todos));
// 	show();

// }
// function show(){
// 	var todos = getTodos();
// 	var html = '<ul>';
// 	for(var i=0; i<todos.length; i++){
// 		html +='<li>' + todos[i] + '<button class="remove" id ="' + i + '">X</button>'
// 	};
// 	html += '</ul>';

// 	document.getElementById("todos").innerHTML=html;

// 	var buttons = document.querySelectorAll('.remove');
// 	for(var i=0; i<buttons.length; i++){
// 		buttons[i].addEventListener("click",remove);
// 	};

// }
// function remove(){
// 	var id = this.getAttribute("id");
// 	var todos = getTodos();
// 	todos.splice(id,1);
// 	localStorage.setItem("todo",JSON.stringify(todos));
// 	show();
// }

// document.getElementById("button_src").addEventListener("click",AddToDo);
// show();


// sesion storage

// sessionStorage.setItem("name","Dafinka");

// INDEXEDB

var indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB

if (!indexedDB){
	console.log("Your browser doesn't support a stable version of indexedDB")
};
var request = indexedDB.open("myDb",4);
request.onupgradeneeded = function(){
	var db = request.result;
	var store = db.createObjectStore("Usersholdas",{keyPath:"id"});
	var index = store.createIndex("NameIndex", ["name.last","name.first"]);
};
request.onsuccess = function(){
	var db = request.result;
	var tx = db.transaction("Usersholdas","readwrite");
	var store= tx.objectStore("Usersholdas");
	var index = store.index("NameIndex");

	store.put({id:1234, name:{first: "Dafinka", last:"Pechorova"},age:24});
	store.put({id:4213, name: {first: "Mario", last:"Petkovski"},age:26});

	 var getDafinka =store.get(1234);
	 var getMario = store.get(4213);

	 getDafinka.onsuccess = function(){
	 	console.log(getDafinka.result.name.first);

	 }
	 getMario.onsuccess = function(){
	 	console.log(getMario.result.name.first);
	 }
	 tx.oncomplete = function(){
	 	db.close();
	 }
}
