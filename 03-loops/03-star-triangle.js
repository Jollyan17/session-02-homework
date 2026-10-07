// =============================================
// 3. LOOPS — Star triangle
// =============================================
// Create a variable rows = 5 and print a triangle of stars.
// Hint: start with let line = ""; and add one "*" to it in every loop step.
//
// Expected output:
//   *
//   **
//   ***
//   ****
//   *****

// your code here

let rows = 5;
let line = "";

for (let i = 1; i <= rows; i++) {
    line += "*";
    console.log(line);
}