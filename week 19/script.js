/*const taskInput = document.getElementById("taskInput");
const addTaskButton = document.getElementById("addTaskButton");
const taskListUl = document.getElementById("taskListUl");
const clearListButton = document.getElementById("clearListButton");
const noTaskMessage = document.getElementById("noTaskMessage");

let taskList = [];

function renderTaskList() {
  taskListUl.innerHTML = "";
  taskList.forEach((task, index) => {
    const li = document.createElement("li");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = task.done;
    checkbox.addEventListener("click", () => {
      task.done = checkbox.checked;
      localStorage.setItem("taskList", JSON.stringify(taskList));
    });
    const label = document.createElement("label");
    label.innerText = task.text;
    li.appendChild(checkbox);
    li.appendChild(label);
    taskListUl.appendChild(li);
  });
  if (taskList.length === 0) {
    noTaskMessage.style.display = "block";
    clearButton.disabled = true;
  } else {
    noTaskMessage.style.display = "none";
    clearButton.disabled = false;
  }
}

function addTask() {
  const task = taskInput.value;
  if (task.trim() !== "") {
    taskList.push({
      task: task,
      done: false,
    });
    renderTaskList();
    taskInput.value = "";
  }
}

function toggleDone(index) {
  taskList[index].done = !taskList[index].done;
  renderTaskList();
}

function clearTasks() {
  taskList = [];
  renderTaskList();
}

addButton.addEventListener("click", addTask);
clearButton.addEventListener("click", clearTasks);

renderTaskList();
