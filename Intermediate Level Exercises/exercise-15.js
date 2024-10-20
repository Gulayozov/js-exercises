const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const todoList = [];

function addTask(task) {
    todoList.push({ task, completed: false });
    console.log(`Task added: ${task}`);
}

function markComplete(taskIndex) {
    if (todoList[taskIndex]) {
        todoList[taskIndex].completed = true;
        console.log(`Task ${taskIndex + 1} marked as complete.`);
    } else {
        console.log('Task not found.');
    }
}

function showToDoList() {
    console.log("\nYour To-Do List:");
    todoList.forEach((task, index) => {
        const status = task.completed ? '✅' : '❌';
        console.log(`${index + 1}. ${task.task} [${status}]`);
    });
}

function promptToDoList() {
    rl.question("What would you like to do? (add/display/complete/exit): ", (action) => {
        if (action === 'add') {
            rl.question("Enter the task: ", (task) => {
                addTask(task);
                promptToDoList();
            });
        } else if (action === 'display') {
            showToDoList();
            promptToDoList();
        } else if (action === 'complete') {
            rl.question("Enter the task number to mark as complete: ", (taskNum) => {
                markComplete(parseInt(taskNum) - 1);
                promptToDoList();
            });
        } else if (action === 'exit') {
            rl.close();
        } else {
            console.log("Invalid action.");
            promptToDoList();
        }
    });
}

promptToDoList();
