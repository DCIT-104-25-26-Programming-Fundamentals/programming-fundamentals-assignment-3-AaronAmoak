// =============================================================================
// PROGRAMMING FUNDAMENTALS — Assignment 5
// =============================================================================
//
// TASK: Fibonacci Sequence Generator
//
// -----------------------------------------------------------------------------
// HOW TO RUN THIS PROGRAM
// -----------------------------------------------------------------------------
// 1. Install the input library (only once):  npm install readline-sync
// 2. Run the program:                        node assignment_05_fibonacci_sequence.js
//
// -----------------------------------------------------------------------------
// PART A — Print the First N Terms
// PART B — Check if a Number Belongs to the Sequence
// -----------------------------------------------------------------------------
//
// REQUIREMENTS
// - Use a loop (not recursion) to generate the sequence in both parts.
// - N must be a positive integer. If it is not, print an error message.
// - Each part must be implemented in its own function (see scaffold below).
//
// =============================================================================

const readlineSync = require('readline-sync');

// Part A: Prints the first n terms of the Fibonacci sequence on one line
function printFibonacci(n) {
    let a = 0, b = 1;
    const terms = [];

    for (let i = 0; i < n; i++) {
        terms.push(a);
        const next = a + b;
        a = b;
        b = next;
    }

    console.log("Fibonacci sequence: " + terms.join(" "));
}

// Part B: Checks whether a given number appears in the Fibonacci sequence
function isFibonacci(num) {
    if (num < 0) {
        return false;
    }

    let a = 0, b = 1;

    if (num === a) {
        return true;
    }

    while (a <= num) {
        if (a === num) {
            return true;
        }
        const next = a + b;
        a = b;
        b = next;
    }

    return false;
}

function main() {
    // ---------------- PART A ----------------
    const n = readlineSync.questionInt("How many terms? ");

    if (n <= 0) {
        console.log("Error: N must be a positive integer.");
    } else {
        printFibonacci(n);
    }

    // ---------------- PART B ----------------
    const num = readlineSync.questionInt("Enter a number to check: ");

    if (isFibonacci(num)) {
        console.log(`${num} is a Fibonacci number.`);
    } else {
        console.log(`${num} is NOT a Fibonacci number.`);
    }
}

main();
