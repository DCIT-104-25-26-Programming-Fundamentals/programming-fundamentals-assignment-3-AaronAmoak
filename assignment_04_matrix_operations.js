// =============================================================================
// PROGRAMMING FUNDAMENTALS — Assignment 4
// =============================================================================
//
// TASK: Matrix Operations
//
// In JavaScript, a matrix is represented as an array of arrays:
//   let matrix = [[1, 2, 3], [4, 5, 6]];   // 2 rows, 3 columns
//
// -----------------------------------------------------------------------------
// HOW TO RUN THIS PROGRAM
// -----------------------------------------------------------------------------
// 1. Install the input library (only once):  npm install readline-sync
// 2. Run the program:                        node assignment_04_matrix_operations.js
//
// -----------------------------------------------------------------------------
// PART A — Transpose a Matrix
// PART B — Add Two Matrices
// PART C — Multiply Two Matrices
// -----------------------------------------------------------------------------
//
// REQUIREMENTS
// - Use nested loops for all operations (no external libraries).
// - Each operation must be in its own function (see scaffold below).
// - Display each matrix in a neat, aligned grid format.
//
// =============================================================================
const readlineSync = require('readline-sync');

function readMatrix(rows, cols) {
    const matrix = [];
    for (let i = 0; i < rows; i++) {
        const line = readlineSync.question(`Enter row ${i + 1}: `);
        const row = line.split(' ').map(Number);
        matrix.push(row);
    }
    return matrix;
}

function printMatrix(matrix) {
    for (const row of matrix) {
        console.log(row.map(v => String(v).padStart(5)).join(""));
    }
}

// Part A: Transpose an M x N matrix
function transposeMatrix(matrix, rows, cols) {
    const result = [];
    for (let j = 0; j < cols; j++) {
        result.push(new Array(rows).fill(0));
    }
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            result[j][i] = matrix[i][j];
        }
    }
    return result;
}

// Part B: Add two M x N matrices element-wise
function addMatrices(a, b, rows, cols) {
    const result = [];
    for (let i = 0; i < rows; i++) {
        const row = [];
        for (let j = 0; j < cols; j++) {
            row.push(a[i][j] + b[i][j]);
        }
        result.push(row);
    }
    return result;
}

// Part C: Multiply an M x N matrix A by an N x P matrix B
function multiplyMatrices(a, b, m, n, p) {
    const result = [];
    for (let i = 0; i < m; i++) {
        const row = [];
        for (let j = 0; j < p; j++) {
            let total = 0;
            for (let k = 0; k < n; k++) {
                total += a[i][k] * b[k][j];
            }
            row.push(total);
        }
        result.push(row);
    }
    return result;
}

function main() {
    // ---------------- PART A: Transpose ----------------
    console.log("--- PART A: Transpose a Matrix ---");
    const rowsA = readlineSync.questionInt("Enter number of rows: ");
    const colsA = readlineSync.questionInt("Enter number of columns: ");

    const matA = readMatrix(rowsA, colsA);

    console.log("\nOriginal Matrix:");
    printMatrix(matA);

    const transposed = transposeMatrix(matA, rowsA, colsA);
    console.log("\nTransposed Matrix:");
    printMatrix(transposed);

    // ---------------- PART B: Addition ----------------
    console.log("\n--- PART B: Add Two Matrices ---");
    const rowsB = readlineSync.questionInt("Enter number of rows: ");
    const colsB = readlineSync.questionInt("Enter number of columns: ");

    console.log("\nEnter values for Matrix 1:");
    const mat1 = readMatrix(rowsB, colsB);

    console.log("\nEnter values for Matrix 2:");
    const mat2 = readMatrix(rowsB, colsB);

    const sumResult = addMatrices(mat1, mat2, rowsB, colsB);
    console.log("\nSum of Matrices:");
    printMatrix(sumResult);

    // ---------------- PART C: Multiplication ----------------
    console.log("\n--- PART C: Multiply Two Matrices ---");
    const m = readlineSync.questionInt("Enter rows of Matrix A: ");
    const n = readlineSync.questionInt("Enter columns of Matrix A: ");
    const n2 = readlineSync.questionInt("Enter rows of Matrix B: ");
    const p = readlineSync.questionInt("Enter columns of Matrix B: ");

    if (n !== n2) {
        console.log("Error: Columns of A must equal rows of B for multiplication.");
        return;
    }

    console.log("\nEnter values for Matrix A:");
    const matX = readMatrix(m, n);

    console.log("\nEnter values for Matrix B:");
    const matY = readMatrix(n, p);

    const product = multiplyMatrices(matX, matY, m, n, p);
    console.log("\nProduct of Matrix A x B:");
    printMatrix(product);
}

main();
