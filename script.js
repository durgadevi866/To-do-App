function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    if (taskText === '') {
        alert('Please enter a task 😊');
        return;
    }

    const taskList = document.getElementById('taskList');
    const listItem = document.createElement('li');
    listItem.classList.add('fade-in');

    const taskSpan = document.createElement('span');
    taskSpan.textContent = taskText;

    const completeButton = document.createElement('button');
    completeButton.innerHTML = '✔';
    completeButton.className = 'complete-btn';
    completeButton.onclick = () => {
        taskSpan.classList.toggle('completed');
    };

    const removeButton = document.createElement('button');
    removeButton.textContent = '✖';
    removeButton.className = 'remove-btn';
    removeButton.onclick = () => {
        listItem.remove();
    };

    listItem.appendChild(completeButton);
    listItem.appendChild(taskSpan);
    listItem.appendChild(removeButton);

    taskList.appendChild(listItem);

    taskInput.value = '';
}

// Add task using Enter key
document.getElementById("taskInput").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        addTask();
    }
});
