// 初始變數
const list = document.querySelector("#my-todo")
const addBtn = document.querySelector("#add-btn")
const input = document.querySelector("#new-todo")
const done = document.querySelector("#my-todo-done")
const todoList = document.querySelector("#todo-list")

// 資料
let todos = [
  "Hit the gym",
  "Read a book",
  "Buy eggs",
  "Organize office",
  "Pay bills"
]

for (let todo of todos) {
  addItem(todo)
}

// 函式
// List Todo
function addItem(text) {
  const newItem = document.createElement("li")
  newItem.innerHTML = `
    <label for="todo">${text}</label>
    <i class="delete fa fa-trash"></i>
  `
  list.appendChild(newItem)
}
// check blank
function checkText(text) {
  if (text.trim().length > 0) {
    addItem(text)
    input.classList.remove("is-invalid")
    input.value = ''
  } else {
    input.classList.add("is-invalid")
    input.value = ''
  }
}

// Create
addBtn.addEventListener("click", function () {
  const inputValue = input.value
  checkText(inputValue)
})

//Input with Enter
document.addEventListener('keypress', function () {
  if (event.key === 'Enter') {
    const inputValue = input.value
    checkText(inputValue)
  }
})

// Delete and check
todoList.addEventListener("click", function (event) {
  const target = event.target
  const parentElement = target.parentElement

  if (target.classList.contains("delete")) {
    parentElement.remove();
  } else if (target.tagName === "LABEL") {
    target.classList.toggle("checked")
    if (target.classList.contains("checked")) {
      done.appendChild(parentElement)
    } else {
      list.appendChild(parentElement)
    }
  }
})

