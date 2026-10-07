// =============================================
// 1. VARIABLES — Cafe receipt
// =============================================
// 1 OMR = 1000 baisa. We count in baisa to avoid decimals.
// Your order: 2 shawarma (600 baisa each) and 3 karak (150 baisa each).
// Create variables for every price and count, calculate each line and the total.
// Print the total in baisa AND in OMR (divide by 1000).
//
// Expected output:
//   Shawarma: 2 x 600 = 1200 baisa
//   Karak: 3 x 150 = 450 baisa
//   Total: 1650 baisa = 1.65 OMR

// your code here


let shawarmaPrice = 600;
let shawarmaCount = 2;

let karakPrice = 150;
let karakCount = 3;


let shawarmaTotal = shawarmaPrice * shawarmaCount;
let karakTotal = karakPrice * karakCount;

let totalBaisa = shawarmaTotal + karakTotal;
let totalOMR = totalBaisa / 1000;


console.log(`Shawarma: ${shawarmaCount} x ${shawarmaPrice} = ${shawarmaTotal} baisa`);
console.log(`Karak: ${karakCount} x ${karakPrice} = ${karakTotal} baisa`);
console.log(`Total: ${totalBaisa} baisa = ${totalOMR} OMR`);