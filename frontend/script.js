// Select input, button, and task list elements
const taskInput = document.getElementById('task-input');
const addTaskButton = document.getElementById('add-task');
const taskList = document.getElementById('task-list');

// Function to add a task
function addTask() {
  const taskText = taskInput.value.trim();

  if (taskText === '') {
    alert('Please enter a task.');
    return;
  }

  // Create a new task item
  const taskItem = document.createElement('li');
  taskItem.className = 'task-item';

  const taskContent = document.createElement('span');
  taskContent.textContent = taskText;

  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';
  deleteButton.className = 'delete-task';
  deleteButton.addEventListener('click', () => taskItem.remove());

  taskItem.appendChild(taskContent);
  taskItem.appendChild(deleteButton);

  // Add the new task item to the task list
  taskList.appendChild(taskItem);

  // Clear the input field
  taskInput.value = '';
}

// Attach event listener to the Add Task button
addTaskButton.addEventListener('click', addTask);

// Allow pressing "Enter" to add a task
taskInput.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    addTask();
  }
});
