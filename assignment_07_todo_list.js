// =============================================================================
// PROGRAMMING FUNDAMENTALS — Assignment 7
// =============================================================================
//
// TASK: Console-Based To-Do List Application
//
// -----------------------------------------------------------------------------
// HOW TO RUN THIS PROGRAM
// -----------------------------------------------------------------------------
// 1. Install the input library (only once):  npm install readline-sync
// 2. Run the program:                        node assignment_07_todo_list.js
//
// -----------------------------------------------------------------------------
// REQUIREMENTS
// -----------------------------------------------------------------------------
// - Store tasks in a JavaScript array (e.g. let tasks = []).
// - Use a loop to keep the menu running until the user chooses to quit.
// - Each feature MUST be implemented in its own function (see scaffold below).
// - Handle invalid menu choices gracefully (print an error, do not crash).
// - To remove an item from an array by index, use: tasks.splice(index, 1)
//
// =============================================================================

const readlineSync = require('readline-sync');

function printMenu() {
    console.log("\n============================");
    console.log("     TO-DO LIST MENU");
    console.log("============================");
    console.log("1. Add task");
    console.log("2. View tasks");
    console.log("3. Delete task");
    console.log("4. Quit");
}

// Feature 1: Adds a new task to the array
function addTask(tasks) {
    const task = readlineSync.question("Enter task: ");
    tasks.push(task);
    console.log(`Task added: "${task}"`);
}

// Feature 2: Displays all current tasks, numbered from 1
function viewTasks(tasks) {
    if (tasks.length === 0) {
        console.log("Your task list is empty.");
        return;
    }

    console.log("Your Tasks:");
    tasks.forEach((task, i) => {
        console.log(`${i + 1}. ${task}`);
    });
}

// Feature 3: Removes a task by its displayed number
function deleteTask(tasks) {
    if (tasks.length === 0) {
        console.log("Your task list is empty. Nothing to delete.");
        return;
    }

    viewTasks(tasks);
    const num = readlineSync.questionInt("Enter task number to delete: ");

    if (num < 1 || num > tasks.length) {
        console.log("Error: Invalid task number.");
        return;
    }

    const removed = tasks[num - 1];
    tasks.splice(num - 1, 1);
    console.log(`Task "${removed}" has been removed.`);
}

function main() {
    let tasks = [];
    let running = true;

    while (running) {
        printMenu();
        const choice = readlineSync.question("Enter your choice (1-4): ");

        switch (choice) {
            case "1":
                addTask(tasks);
                break;
            case "2":
                viewTasks(tasks);
                break;
            case "3":
                deleteTask(tasks);
                break;
            case "4":
                console.log("Goodbye!");
                running = false;
                break;
            default:
                console.log("Error: Invalid choice. Please enter 1-4.");
                break;
        }
    }
}

main();
