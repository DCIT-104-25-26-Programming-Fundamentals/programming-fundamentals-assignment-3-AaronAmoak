// =============================================================================
// PROGRAMMING FUNDAMENTALS — Assignment 6
// =============================================================================
//
// TASK: Multiplication Table Generator
//
// -----------------------------------------------------------------------------
// HOW TO RUN THIS PROGRAM
// -----------------------------------------------------------------------------
// 1. Install the input library (only once):  npm install readline-sync
// 2. Run the program:                        node assignment_06_multiplication_table.js
//
// -----------------------------------------------------------------------------
// PART A — Single Table
// PART B — Bonus: Tables from 1 to N
// -----------------------------------------------------------------------------
//
// REQUIREMENTS
// - N must be a positive integer. If the user enters an invalid value,
//   print an error message and stop.
// - Each part must be in its own function (see scaffold below).
//
// =============================================================================

const readlineSync = require('readline-sync');

// Part A: Prints the multiplication table for a single number, 1 through 12
function printTable(num) {
    console.log(`Multiplication Table for ${num}:`);
    for (let i = 1; i <= 12; i++) {
        console.log(`${num}  x  ${String(i).padStart(2)}  =  ${num * i}`);
    }
}

// Part B: Prints multiplication tables for every number from 1 to n,
// separated by a divider line
function printTablesUpTo(n) {
    for (let num = 1; num <= n; num++) {
        printTable(num);
        if (num !== n) {
            console.log("---------------------------");
        }
    }
}

function main() {
    // ---------------- PART A ----------------
    const number = readlineSync.questionInt("Enter a number: ");
    console.log();
    printTable(number);

    // ---------------- PART B ----------------
    const n = readlineSync.questionInt("\nEnter N (for tables 1 to N): ");

    if (n <= 0) {
        console.log("Error: N must be a positive integer.");
        return;
    }

    console.log();
    printTablesUpTo(n);
}

main();
