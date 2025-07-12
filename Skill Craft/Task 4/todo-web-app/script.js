function addTask() {
  const taskInput = document.getElementById("taskInput");
  const dateInput = document.getElementById("taskDateTime");

  const taskText = taskInput.value.trim();
  const taskDateTime = dateInput.value;

  if (taskText === "") {
    alert("Please enter a task.");
    return;
  }

  const li = document.createElement("li");
  li.className = "task";
  li.innerHTML = `
    <div onclick="toggleComplete(this.parentElement)">
      <strong>${taskText}</strong>
      <span class="datetime">${taskDateTime ? "📅 " + taskDateTime : ""}</span>
    </div>
    <div class="task-actions">
      <button onclick="editTask(this)">✏️</button>
      <button onclick="deleteTask(this)">🗑️</button>
    </div>
  `;

  document.getElementById("taskList").appendChild(li);
  taskInput.value = "";
  dateInput.value = "";
}

function toggleComplete(taskElement) {
  taskElement.classList.toggle("completed");
}

function deleteTask(btn) {
  const li = btn.closest("li");
  li.remove();
}

function editTask(btn) {
  const li = btn.closest("li");
  const currentText = li.querySelector("strong").innerText;
  const newTask = prompt("Edit task:", currentText);
  if (newTask) {
    li.querySelector("strong").innerText = newTask;
  }
}
