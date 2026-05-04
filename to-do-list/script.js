const input = document.getElementById("taskinput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");
const toggleBtn = document.getElementById("toggleMode");

// Load tasks when page opens
document.addEventListener("DOMContentLoaded", loadTasks);

addBtn.addEventListener("click", function () {
  const taskText = input.value;

  if (taskText === "") return;

  addTask(taskText);
  saveTask(taskText);

  input.value = "";
});

toggleBtn.addEventListener("click", function(){
    document.body.classList.toggle("dark");
});

// Function to create task in UI
function addTask(taskText) {
  const li = document.createElement("li");

  const span = document.createElement("span");
  span.textContent = taskText;

  span.addEventListener("click", function () {
    span.classList.toggle("completed");
  });

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "X";

  deleteBtn.addEventListener("click", function () {
    li.remove();
    deleteTask(taskText);
  });

  li.appendChild(span);
  li.appendChild(deleteBtn);

  taskList.appendChild(li);
}

// Save task to localStorage
function saveTask(taskText) {
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.push(taskText);
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Load tasks from localStorage
function loadTasks() {
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.forEach(task => addTask(task));
}

// Delete task from localStorage
function deleteTask(taskText) {
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks = tasks.filter(task => task !== taskText);
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

