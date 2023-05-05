// Объявляем константы для элементов DOM
const taskInput = document.getElementById("task-input");
const addTaskButton = document.getElementById("add-task");
const taskList = document.getElementById("task-list");
const clearTasksButton = document.getElementById("clear-tasks");
const noTaskMessage = document.getElementById("no-tasks-message");

// Функция обновления списка задач
function updateTaskList() {
  // Очищаем список задач
  taskList.innerHTML = "";

  // Добавляем задачи из массива tasks в список
  for (let i = 0; i < tasks.length; i++) {
    const task = tasks[i];
    const listItem = document.createElement("li");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = task.isCompleted;
    // Добавляем обработчик события change, чтобы помечать задачи как выполненные
    checkbox.addEventListener("change", () => {
      task.isCompleted = checkbox.checked;
    });
    listItem.appendChild(checkbox);
    const label = document.createElement("label");
    label.textContent = task.description;
    listItem.appendChild(label);
    taskList.appendChild(listItem);
  }

  // Если список задач пуст, то отображаем сообщение об отсутствии задач и блокируем кнопку очистки списка
  if (tasks.length === 0) {
    noTaskMessage.style.display = "block";
    clearTasksButton.disabled = true;
  }
  // Если список задач не пуст, то скрываем сообщение и разблокируем кнопку очистки списка
  else {
    noTaskMessage.style.display = "none";
    clearTasksButton.disabled = false;
  }
}

// Функция добавления задачи
function addTask() {
  const taskDescription = taskInput.value;
  // Проверяем, что описание задачи не пустое
  if (taskDescription.trim() !== "") {
    const task = {
      description: taskDescription,
      isCompleted: false,
    };
    // Добавляем новую задачу в массив tasks
    tasks.push(task);
    // Обновляем список задач и очищаем поле ввода
    updateTaskList();
    taskInput.value = "";
  }
}

// Функция очистки списка задач
function clearTasks() {
  // Очищаем массив tasks и обновляем список задач
  tasks = [];
  taskInput.value = "";
  updateTaskList();
}

// Создаем пустой массив tasks
let tasks = [];

// Добавляем обработчики событий на кнопки добавления и очистки задач, и вызываем функцию обновления списка задач
addTaskButton.addEventListener("click", addTask);
clearTasksButton.addEventListener("click", clearTasks);
updateTaskList(); // Вызываем функцию обновления списка задач на странице при загрузке страницы
