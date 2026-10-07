// =============================================
// 1. VARIABLES — Trip cost
// =============================================
// You drive from Muscat to Salalah.
// Create variables:
//   distance = 1000      (km)
//   fuelPer100km = 8     (liters the car uses for every 100 km)
//   fuelPrice = 0.25     (OMR per liter)
// Calculate how many liters you need and how much the fuel costs.
// Print the result using template literals.
//
// Expected output:
//   Trip: 1000 km
//   Fuel needed: 80 liters
//   Fuel cost: 20 OMR

// your code here



let distance = 1000;
let fuelPer100km = 8;
let fuelPrice = 0.25;


let fuelNeeded = (distance / 100) * fuelPer100km;
let fuelCost = fuelNeeded * fuelPrice;


console.log(`Trip: ${distance} km`);
console.log(`Fuel needed: ${fuelNeeded} liters`);
console.log(`Fuel cost: ${fuelCost} OMR`);
