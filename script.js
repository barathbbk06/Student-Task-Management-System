let taskCount = 0;

function addTask() {
    const input = document.getElementById("taskInput");
    const task = input.value.trim();

if (task === "") {
    alert("Task cannot be empty. Please enter a task.");
    return;
}

    const list = document.getElementById("taskList");
    const item = document.createElement("li");

    item.textContent = task;
    list.appendChild(item);

    taskCount++;
    console.log("Total tasks: " + taskCount);

    input.value = "";
}