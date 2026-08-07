// =============================================================================
// PROGRAMMING FUNDAMENTALS — Assignment 3
// =============================================================================
//
// TASK: Array Statistics Calculator
//
// -----------------------------------------------------------------------------
// HOW TO RUN THIS PROGRAM
// -----------------------------------------------------------------------------
// 1. Install the input library (only once):  npm install readline-sync
// 2. Run the program:                        node assignment_03_array_statistics.js
//
// -----------------------------------------------------------------------------
// REQUIREMENTS
// -----------------------------------------------------------------------------
// - You MUST implement each calculation in its own function (see scaffold).
// - You may NOT use JavaScript's built-in array methods like reduce(),
//   Math.max(), or Math.min(). Implement the logic yourself using loops.
// - N must be a positive integer. If the user enters 0 or a negative number,
//   print an error message and stop.
//
// =============================================================================

const readlineSync = require("readline-sync");

function computeSum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

function computeAverage(arr) {
    return computeSum(arr) / arr.length;
}

function computeMax(arr) {
    let maxVal = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > maxVal) {
            maxVal = arr[i];
        }
    }
    return maxVal;
}

function computeMin(arr) {
    let minVal = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < minVal) {
            minVal = arr[i];
        }
    }
    return minVal;
}

function main() {
    const n = readlineSync.questionInt("How many numbers? ");

    if (n <= 0) {
        console.log("Error: The number of values must be positive.");
        return;
    }

    const numbers = [];
    for (let i = 0; i < n; i++) {
        const value = readlineSync.questionInt(`Enter number ${i + 1}: `);
        numbers.push(value);
    }

    console.log();
    console.log("Results:");
    console.log("Sum:    ", computeSum(numbers));
    console.log("Average:", computeAverage(numbers));
    console.log("Maximum:", computeMax(numbers));
    console.log("Minimum:", computeMin(numbers));
}

main();
