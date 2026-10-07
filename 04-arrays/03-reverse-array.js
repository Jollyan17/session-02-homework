// =============================================
// 4. ARRAYS — Reverse an array
// =============================================
// Create a NEW array reversed with the cities in the opposite order.
// Do NOT use .reverse() — use a loop that goes from the end to the start.
// Print the new array.
//
// Expected output:
//   [ 'Sur', 'Nizwa', 'Sohar', 'Salalah', 'Muscat' ]
//   (the browser console shows arrays a bit differently — the order is what matters)

const cities = ["Muscat", "Salalah", "Sohar", "Nizwa", "Sur"];

// your code here


const reversedCities = [];

for (let i = cities.length - 1; i >= 0; i--) {
    reversedCities.push(cities[i]);
}

console.log(reversedCities);