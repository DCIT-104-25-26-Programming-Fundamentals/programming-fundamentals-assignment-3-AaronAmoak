// =============================================================================
// PROGRAMMING FUNDAMENTALS — Assignment 2
// =============================================================================
//
// TASK: Student Grade System
//
// Grading Scale:
//   Score 80 – 100  →  Grade A
//   Score 70 – 79   →  Grade B
//   Score 60 – 69   →  Grade C
//   Score 50 – 59   →  Grade D
//   Score below 50  →  Grade F
//
// -----------------------------------------------------------------------------
// HOW TO RUN THIS PROGRAM
// -----------------------------------------------------------------------------
// 1. Install the input library (only once):  npm install readline-sync
// 2. Run the program:                        node assignment_02_student_grade_system.js
//
// -----------------------------------------------------------------------------
// REQUIREMENTS
// -----------------------------------------------------------------------------
// - You MUST use functions (see scaffold below).
// - Validate the score inside getGrade(). If it is out of range, return null
//   and let main() print the error message.
// - Use if / else if / else to determine the grade.
//
// =============================================================================

const readlineSync = require("readline-sync");

function getGrade(score) {
    if (score < 0 || score > 100) {
        return null; // invalid score, let main() handle the error message
    }

    if (score >= 80) {
        return "A";
    } else if (score >= 70) {
        return "B";
    } else if (score >= 60) {
        return "C";
    } else if (score >= 50) {
        return "D";
    } else {
        return "F";
    }
}

function main() {
    const score = readlineSync.questionInt("Enter student score (0-100): ");

    const grade = getGrade(score);

    if (grade === null) {
        console.log("Error: Score must be between 0 and 100.");
    } else {
        console.log(`Grade: ${grade}`);
    }
}

main();
