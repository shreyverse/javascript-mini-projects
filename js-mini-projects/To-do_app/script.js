let taskList = [];
const addBtn = document.getElementById('addBtn');
const taskListDOM = document.getElementById('taskList');

addBtn.addEventListener('click', function() { 
    const taskInput = document.getElementById('taskInput');
    const dateInput = document.getElementById('dateInput');

    taskList.push({task: taskInput.value, date: dateInput.value});
    
    // Create and append list item to DOM
    const li = document.createElement('li');
    li.textContent = taskInput.value + ' (Due: ' + dateInput.value + ')';
    taskListDOM.appendChild(li);
    
    taskInput.value = ''; // Clear input field
    dateInput.value = ''; // Clear date field
    console.log(taskList);
});
const deleteBtn = document.getElementById('deleteBtn');
deleteBtn.addEventListener('click', function() {
    taskList.pop(); // Remove last task from array
    taskListDOM.removeChild(taskListDOM.lastChild); // Remove last task from DOM
    console.log(taskList);
});
const compltBtn = document.getElementById('compltBtn');
compltBtn.addEventListener('click', function() {
    // Add tick mark to the last task
    if (taskListDOM.lastChild) {
        taskListDOM.lastChild.textContent += ' ✓';
    }
});