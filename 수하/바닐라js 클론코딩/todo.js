const todoForm = document.querySelector("#todo-form")
const todoInput = todoForm.querySelector("input")
// = document.querySelector("#todo-form input")
const todoList = document.querySelector("#todo-list")

function todoHandler(event) {
    event.preventDefault();
    const newTodo = todoInput.value;
    todoInput.value = "";
    paintList(newTodo);
}

function paintList(newTodo) {
    const li = document.createElement("li")
    const span = document.createElement("span")
    li.appendChild(span);
    span.innerText = newTodo;
    todoList.appendChild(li);

}

todoForm.addEventListener("submit", todoHandler);


//console.log(todoForm.input); 으로는 안되네
//컨 쉬 l 