// =============================================================================
// PROGRAMMING FUNDAMENTALS — Assignment 9
// =============================================================================
//
// TASK: Console-Based Simple Calculator
//
// -----------------------------------------------------------------------------
// HOW TO RUN THIS PROGRAM
// -----------------------------------------------------------------------------
// 1. Install the input library (only once):  npm install readline-sync
// 2. Run the program:                        node assignment_09_simple_calculator.js
//
// -----------------------------------------------------------------------------
// OPERATIONS YOUR CALCULATOR MUST SUPPORT
// -----------------------------------------------------------------------------
//
//   1. Addition          ( + )
//   2. Subtraction       ( - )
//   3. Multiplication    ( * )
//   4. Division          ( / )
//   5. Modulus           ( % )
//   6. Exponentiation    ( ** )
//   7. Quit
//
// -----------------------------------------------------------------------------
// REQUIREMENTS
// -----------------------------------------------------------------------------
// - Each arithmetic operation MUST be written as its own function.
// - Use a loop so the calculator keeps running until the user selects Quit.
// - Division by zero must be caught and handled with a clear error message
//   (do NOT let the program crash).
// - Display results to 2 decimal places using .toFixed(2).
// - Handle invalid menu choices gracefully.
//
// =============================================================================

const readlineSync = require('readline-sync');

function addNumbers(a, b) {
    return a + b;
}

function subtractNumbers(a, b) {
    return a - b;
}

function multiplyNumbers(a, b) {
    return a * b;
}

function divideNumbers(a, b) {
    return a / b;
}

function modulusNumbers(a, b) {
    return a % b;
}

function powerNumbers(base, exponent) {
    return base ** exponent;
}

function printMenu() {
    console.log("\n============================");
    console.log("     SIMPLE CALCULATOR");
    console.log("============================");
    console.log("1. Addition");
    console.log("2. Subtraction");
    console.log("3. Multiplication");
    console.log("4. Division");
    console.log("5. Modulus");
    console.log("6. Exponentiation");
    console.log("7. Quit");
}

function main() {
    let running = true;

    while (running) {
        printMenu();
        const choice = readlineSync.question("Select an operation (1-7): ");

        if (choice === "7") {
            console.log("Goodbye!");
            running = false;
            continue;
        }

        if (!["1", "2", "3", "4", "5", "6"].includes(choice)) {
            console.log("Error: Invalid choice. Please select 1-7.");
            continue;
        }

        const a = readlineSync.questionFloat("Enter first number : ");
        const b = readlineSync.questionFloat("Enter second number: ");
        let result;

        switch (choice) {
            case "1":
                result = addNumbers(a, b);
                console.log(`Result: ${a} + ${b} = ${result.toFixed(2)}`);
                break;
            case "2":
                result = subtractNumbers(a, b);
                console.log(`Result: ${a} - ${b} = ${result.toFixed(2)}`);
                break;
            case "3":
                result = multiplyNumbers(a, b);
                console.log(`Result: ${a} * ${b} = ${result.toFixed(2)}`);
                break;
            case "4":
                if (b === 0) {
                    console.log("Error: Cannot divide by zero.");
                } else {
                    result = divideNumbers(a, b);
                    console.log(`Result: ${a} / ${b} = ${result.toFixed(2)}`);
                }
                break;
            case "5":
                if (b === 0) {
                    console.log("Error: Cannot divide by zero.");
                } else {
                    result = modulusNumbers(a, b);
                    console.log(`Result: ${a} % ${b} = ${result.toFixed(2)}`);
                }
                break;
            case "6":
                result = powerNumbers(a, b);
                console.log(`Result: ${a} ** ${b} = ${result.toFixed(2)}`);
                break;
        }
    }
}

main();
