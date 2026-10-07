// =============================================
// 3. LOOPS — Even numbers
// =============================================
// Using a for loop from 1 to 20, print only the even numbers.
// Hint: use % and an if inside the loop.
//
// Expected output:
//   2
//   4
//   6
//   8
//   10
//   12
//   14
//   16
//   18
//   20

// your code here

for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}