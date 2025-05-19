const todoInput = document.querySelector("#todo-input");
const addTodo = document.querySelector("#add-todo");


const todos = JSON.parse(localStorage.getItem("todos")) || []; // if the todos are not in the local storage, then we will use an empty array

todoInput.addEventListener("keypress", (e) => {
    // console.log(e);
    if (e.key === "Enter") {
        console.log("Enter key pressed");
        addTodo.click(); // trigger the click event on the addTodo button
    }
})

addTodo.addEventListener("click", (e) => {
    // e = event object
    e.preventDefault();
    const todoText = todoInput.value;
    console.log(todoText);
    if (todoText.trim() !== "") {
        newTodo(todoText);
        renderTodos(); // re-render the todos
        todoInput.value = "";
    }
})

const todoList = document.querySelector("#todo-list"); // this is the ul element

function newTodo(todoText) {
    todos.push({
        text: todoText,
        completed: false
    })
    saveTodos();
}

function saveTodos() {
    localStorage.setItem("todos", JSON.stringify(todos)) // save the todos to the local storage
}

function renderTodos() {
    todoList.innerHTML = "";
    todos.forEach(todo => {
        renderTodo(todo);
    })
}

function renderTodo(todo) {
    // todo is an object with text and completed properties
    const li = document.createElement("li");
    li.classList.add("p-2", "border-b", "flex", "justify-start", "items-center", "gap-2");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = todo.completed;

    checkbox.addEventListener("change", (e) => {
        console.log("checkbox changed: ", e);
        todo.completed = e.target.checked; // basically we are getting the state of the checkbox
        saveTodos();
        renderTodos();
    })
    
    li.appendChild(checkbox);
    
    const span = document.createElement("span");
    if (todo.completed) {
        span.classList.add("line-through", "text-gray-300");
    }
    span.innerText = todo.text;
    li.appendChild(span);

    todoList.appendChild(li);
}



// render the full todo list
renderTodos();



// --- old code ---
function localStorageExample() {
    localStorage.setItem("todos", '[{"text": "buy groceries", "completed": false}, {"text": "buy groceries2", "completed": false}]');

    const todosLocal = localStorage.getItem("todos");
    console.log(todosLocal);
    // console.log(todosLocal[0]);

    const parsedTodos = JSON.parse(todosLocal);
    // JavaScript Object Notation
    console.log(parsedTodos);

    console.log(JSON.stringify(todos));
}

// localStorageExample();
// render a single todo, -- this is not used anymore
function renderTodoOld(todoText) {
    const li = document.createElement("li");

    li.classList.add("p-2", "border-b", "flex", "justify-between", "items-center");

    // li.textContent = todoText;
    li.innerText = todoText;

    todoList.appendChild(li);
}