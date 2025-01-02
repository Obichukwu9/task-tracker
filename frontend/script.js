let loggedIn = false;

function showDashboard() {
    if (loggedIn) {
        document.getElementById('dashboard').style.display = "block";
        document.getElementById('logoutBtn').style.display = "inline-block";
        document.getElementById('toDoListSection').style.display = "block";
        document.getElementById('toDoListInfo').style.display = "none";
    }
}

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskDate = document.getElementById('taskDate');
    const reminderTime = document.getElementById('reminderTime');
    const taskList = document.getElementById('taskList');
    const taskText = taskInput.value;
    const dueDate = taskDate.value;
    const reminder = reminderTime.value;

    if (taskText === "" || dueDate === "" || reminder === "") {
        alert("Please fill in all fields before adding a task.");
        return;
    }

    // Create the task element
    const taskDiv = document.createElement('div');
    taskDiv.className = 'task';
    taskDiv.innerHTML = `
        <strong>Task:</strong> ${taskText} <br>
        <strong>Due Date:</strong> ${dueDate} <br>
        <strong>Reminder Time:</strong> ${reminder} <br>
        <button onclick="deleteTask(this)">Delete</button>
    `;

    // Append task to the list
    taskList.appendChild(taskDiv);

    // Clear inputs after adding
    taskInput.value = '';
    taskDate.value = '';
    reminderTime.value = '';
}

function deleteTask(button) {
    button.parentElement.remove();
}

function showLogin() {
    document.getElementById('loginModal').style.display = "block";
}

function closeLogin() {
    document.getElementById('loginModal').style.display = "none";
}

function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username && password) {
        alert(`Welcome, ${username}`);
        loggedIn = true;
        closeLogin();
        showDashboard();
    } else {
        alert('Please enter a valid username and password.');
    }
}

function logout() {
    loggedIn = false;
    alert('You have logged out.');
    document.getElementById('dashboard').style.display = "none";
    document.getElementById('logoutBtn').style.display = "none";
}

function showAboutUs() {
    document.getElementById('aboutUs').style.display = "block";
    document.getElementById('dashboard').style.display = "none";
}

function showContactUs() {
    document.getElementById('contactUs').style.display = "block";
    document.getElementById('dashboard').style.display = "none";
}
