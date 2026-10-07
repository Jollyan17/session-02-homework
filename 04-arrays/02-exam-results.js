// =============================================
// 4. ARRAYS — Exam results
// =============================================
// 1. Count how many students passed (score 60 or more).
// 2. Find the lowest score WITHOUT Math.min.
//
// Expected output:
//   Passed: 4 of 7
//   Lowest score: 39

const scores = [78, 45, 92, 60, 55, 88, 39];

// your code here


let passedCount = 0;
let lowestScore = scores[0];

for (let i = 0; i < scores.length; i++) {
    // 1. Count students who passed (score 60 or more)
    if (scores[i] >= 60) {
        passedCount++;
    }
    
    // 2. Find the lowest score
    if (scores[i] < lowestScore) {
        lowestScore = scores[i];
    }
}

console.log(`Passed: ${passedCount} of ${scores.length}`);
console.log(`Lowest score: ${lowestScore}`);