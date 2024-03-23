let button = document.getElementById("btn");
let results = document.getElementById("results");
let input = document.getElementById("todo");

function getTodos() {
  let todos = JSON.parse(localStorage.getItem("todos"));
  return todos ? todos : [];
}
function saveTodo(todo) {
  localStorage.setItem("todos", JSON.stringify(todo));
}

function displayTodos() {
  const todoList = document.getElementById("results");
  todoList.innerHTML = "";

  const todos = getTodos();
  todos.forEach((todo, index) => {
    const li = document.createElement("li");
    li.textContent = todo;
    li.setAttribute("data-index", index);
    const button = document.createElement("button");
    button.textContent = "Remove";
    button.addEventListener("click", removeTodo);
    li.appendChild(button);
    todoList.appendChild(li);
  });
}

function addTodo(){
    const inputValue = input.value;
    const todos = getTodos();
    todos.push(inputValue);
    saveTodo(todos);
    displayTodos();
}

function removeTodo(){
    const index = parseInt(this.parentNode.getAttribute("data-index"));
    const todos = getTodos();
    todos.splice(index,1);
    saveTodo(todos);
    displayTodos();
}

button.addEventListener("click", addTodo);

