// =============================================
// 2. CONDITIONS — STRETCH: Triangle type
// =============================================
// Create sides a = 5, b = 5, c = 8. Print the triangle type:
//   all three sides equal  -> "Equilateral"
//   exactly two equal      -> "Isosceles"
//   all different          -> "Scalene"
// Test with (3, 3, 3) and (3, 4, 5) too.
//
// Expected output:
//   Isosceles

// your code here

let a = 5;
let b = 5;
let c = 8;

if (a === b && b === c) {
    console.log("Equilateral");
} else if (a === b || a === c || b === c) {
    console.log("Isosceles");
} else {
    console.log("Scalene");
}