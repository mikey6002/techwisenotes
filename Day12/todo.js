const todoinput = document.querySelector("#todo-input");
const addtodo = document.querySelector("#add-todo");
const clearall = document.querySelector("#clear-all");
const todolist = document.querySelector("#todo-list");
const todocount = document.querySelector("#todo-count");

// Add event listener to the "Add Todo" button
addtodo.addEventListener("click", function () {
  const todoText = todoinput.value.trim();
  if (todoText === "") {
    alert("Please enter a todo!");
    return;
  }

  const todoItem = document.createElement("li");
  todoItem.textContent = todoText;

  // Add a click event to toggle "completed" class
  todoItem.addEventListener("click", function () {
    todoItem.classList.toggle("completed");
  });

  todolist.appendChild(todoItem);
  todoinput.value = "";

  // Update the todo count
  const count = todolist.children.length;
  todocount.textContent = `Total Todos: ${count}`;
});

// Add event listener to the "Clear All" button
clearall.addEventListener("click", function () {
  todolist.innerHTML = "";
  todocount.textContent = "Total Todos: 0";
});

// Add event listener for pressing "Enter" in the input field
todoinput.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    e.preventDefault();
    addtodo.click(); // Trigger the "Add Todo" button click
  }
});

function renderTodos() {
  const todos = JSON.parse(localStorage.getItem("todos")) || [];
  todolist.innerHTML = "";
  todos.forEach((todo) => {
    const todoItem = document.createElement("li");
    todoItem.textContent = todo;
    todoItem.addEventListener("click", function () {
      todoItem.classList.toggle("completed");
    });
    todolist.appendChild(todoItem);
  });
  todocount.textContent = `Total Todos: ${todos.length}`;


  
}
// Save todos to local storage
function saveTodos() {
  const todos = [];
  for (let i = 0; i < todolist.children.length; i++) {
    todos.push(todolist.children[i].textContent);
  }
  localStorage.setItem("todos", JSON.stringify(todos));


}

