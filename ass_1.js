const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

// Add task function
function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task.");
        return;
    }

    // Create list item
    const li = document.createElement("li");

    // Task name
    const taskSpan = document.createElement("span");
    taskSpan.textContent = taskText;

    // Complete button
    const completeBtn = document.createElement("button");
    completeBtn.textContent = "Complete";
    completeBtn.classList.add("complete-btn");

    completeBtn.addEventListener("click", () => {
        taskSpan.classList.toggle("completed");
    });

    // Delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("delete-btn");

    deleteBtn.addEventListener("click", () => {
        li.remove();
    });

    // Button container
    const buttonContainer = document.createElement("div");
    buttonContainer.appendChild(completeBtn);
    buttonContainer.appendChild(deleteBtn);

    li.appendChild(taskSpan);
    li.appendChild(buttonContainer);

    taskList.appendChild(li);

    taskInput.value = "";
}

// Add task on button click
addTaskBtn.addEventListener("click", addTask);

// Add task on Enter key press
taskInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        addTask();
    }
});