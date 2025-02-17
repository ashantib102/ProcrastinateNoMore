let timer; 
let timeLeft = 1500; // 25 minutes
let running = false;
let sessionCount = 0;
let points = 0; // Points variable

// Start the Pomodoro timer
function startTimer() {
    if (!running) {
        running = true;
        timer = setInterval(() => {
            if (timeLeft > 0) {
                timeLeft--;
                updateTimerDisplay();
            } else {
                clearInterval(timer);
                sessionCount++;
                if (sessionCount % 4 === 0) {
                    alert("Great job! Take a long break.");
                } else {
                    alert("Time's Up! Take a short break.");
                }
                // Add 2 points for each 25-minute Pomodoro cycle completed
                points += 2;
                updatePointsDisplay(); // Update the points display
                running = false;
            }
        }, 1000);
    }
}

// Reset the timer
function resetTimer() {
    clearInterval(timer);
    timeLeft = 1500; // Reset to 25 minutes
    running = false;
    updateTimerDisplay();
}

// Set the short break time (5 minutes)
function setShortBreak() {
    clearInterval(timer);
    timeLeft = 300; // 5 minutes for short break
    running = false;
    updateTimerDisplay();
}

// Set the long break time (10 minutes)
function setLongBreak() {
    clearInterval(timer);
    timeLeft = 600; // 10 minutes for long break
    running = false;
    updateTimerDisplay();
}

// Update the timer display in the DOM
function updateTimerDisplay() {
    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;
    document.getElementById("timer").innerText = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}

// Add a task to the task list
function addTask() {
    let taskText = document.getElementById("task-input").value;
    let taskTime = document.getElementById("task-time").value;
    if (taskText.trim() !== "" && taskTime.trim() !== "") {
        let taskList = document.getElementById("task-list");
        let taskItem = document.createElement("div");
        taskItem.className = "task";
        taskItem.innerHTML = `<span>${taskText} - ${taskTime} min</span> <button onclick="this.parentElement.remove()">✔</button>`;
        taskList.appendChild(taskItem);
        document.getElementById("task-input").value = "";
        document.getElementById("task-time").value = "";
    }
}

// Update the points display in the navbar
function updatePointsDisplay() {
    document.getElementById("pointsDisplay").innerText = `Points: ${points}`;
}

// Initialize the points display when the page loads
document.addEventListener('DOMContentLoaded', (event) => {
    updatePointsDisplay(); // Make sure the points are displayed when the page loads
});
