function getTodos(){
	var todos = [];
	var todos_value = localStorage.getItem("todo");
	if(todos_value !== null){
		todos = JSON.parse(todos_value);
	}
	return todos;
}

function AddToDo(){
	var todo = document.getElementById("todo_src").value;
	var todos = getTodos();
	todos.push(todo);

	localStorage.setItem("todo", JSON.stringify(todos));

	show();
}

function show(){
	var todos = getTodos();
	var html = '<ul>';

	for(var i = 0; i < todos.length; i++){
		html += '<li>' + todos[i] + '<button class="remove" id="'+ i +'">X</button>' + '</li>';
	};

	html += '</ul>';

	document.getElementById("todos").innerHTML = html;

	var buttons = document.querySelectorAll(".remove");

	for(var i = 0; i < buttons.length; i++){
		buttons[i].addEventListener("click", remove);
	};


};

function remove(){
	var id = this.getAttribute("id");
	 if (confirm("Are you sure you want to delete this?") == true) {
        //Ok
        var todos = getTodos();
		console.log(todos);
		todos.splice(id, 1);
		localStorage.setItem("todo", JSON.stringify(todos));
		show();
    } else {
        //Cancel
    }
}
setTimeout(function(){
	document.getElementById("button_src").addEventListener("click", AddToDo);
	show();
},100);
