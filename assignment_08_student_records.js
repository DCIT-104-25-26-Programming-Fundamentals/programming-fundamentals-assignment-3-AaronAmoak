// =============================================================================
// PROGRAMMING FUNDAMENTALS — Assignment 8
// =============================================================================
//
// TASK: Student Record Management System
//
// Each student is a JavaScript object:
//   { name: "Alice Mensah", id: 20240001, scores: [78, 85, 90] }
//
// -----------------------------------------------------------------------------
// HOW TO RUN THIS PROGRAM
// -----------------------------------------------------------------------------
// 1. Install the input library (only once):  npm install readline-sync
// 2. Run the program:                        node assignment_08_student_records.js
//
// -----------------------------------------------------------------------------
// REQUIREMENTS
// -----------------------------------------------------------------------------
// - Store all student records in an array of objects.
// - Average scores must be displayed to 2 decimal places (use .toFixed(2)).
// - Each feature MUST be in its own function (see scaffold below).
// - Handle invalid menu choices and missing student IDs gracefully.
//
// =============================================================================

const readlineSync = require('readline-sync');

function computeAverage(student) {
    if (student.scores.length === 0) return 0;
    let sum = 0;
    for (let i = 0; i < student.scores.length; i++) {
        sum += student.scores[i];
    }
    return sum / student.scores.length;
}

// Feature 1: Adds a new student record
function addStudent(students) {
    const name = readlineSync.question("Student name: ");
    const id = readlineSync.questionInt("Student ID: ");
    const numScores = readlineSync.questionInt("How many scores? ");

    const scores = [];
    for (let i = 0; i < numScores; i++) {
        const score = readlineSync.questionFloat(`Enter score ${i + 1}: `);
        scores.push(score);
    }

    students.push({ name, id, scores });
    console.log(`Student "${name}" added successfully.`);
}

// Feature 2: Displays every student's name, ID, scores, and average
function displayAllStudents(students) {
    if (students.length === 0) {
        console.log("No students have been added yet.");
        return;
    }

    console.log("-".repeat(50));
    console.log("Name".padEnd(15) + "ID".padEnd(12) + "Scores".padEnd(15) + "Average");
    console.log("-".repeat(50));

    for (const s of students) {
        const scoresStr = s.scores.join(", ");
        console.log(
            s.name.padEnd(15) +
            String(s.id).padEnd(12) +
            scoresStr.padEnd(15) +
            computeAverage(s).toFixed(2)
        );
    }
    console.log("-".repeat(50));
}

// Feature 3: Looks up a student by ID and prints their average score
function calculateAverageForId(students) {
    const id = readlineSync.questionInt("Enter student ID: ");

    for (const s of students) {
        if (s.id === id) {
            console.log(`${s.name}'s average score: ${computeAverage(s).toFixed(2)}`);
            return;
        }
    }

    console.log("Error: Student ID not found.");
}

function printMenu() {
    console.log("\n================================");
    console.log("   STUDENT RECORD SYSTEM MENU");
    console.log("================================");
    console.log("1. Add student");
    console.log("2. Display all students");
    console.log("3. Calculate average score");
    console.log("4. Quit");
}

function main() {
    const students = [];
    let running = true;

    while (running) {
        printMenu();
        const choice = readlineSync.question("Enter your choice (1-4): ");

        switch (choice) {
            case "1":
                addStudent(students);
                break;
            case "2":
                displayAllStudents(students);
                break;
            case "3":
                calculateAverageForId(students);
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
