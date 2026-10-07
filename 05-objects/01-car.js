// =============================================
// 5. OBJECTS — Car
// =============================================
// 1. Create an object car: brand "Toyota", model "Land Cruiser", year 2020, mileage 85000.
// 2. Print the car info in one line.
// 3. You drove to Salalah (1000 km): increase mileage by 1000 and print it.
// 4. Add a new key color = "white" and print it.
//
// Expected output:
//   Toyota Land Cruiser (2020), 85000 km
//   After the trip to Salalah: 86000 km
//   Color: white

// your code here


const car = {
    brand: "Toyota",
    model: "Land Cruiser",
    year: 2020,
    mileage: 85000
};

console.log(`${car.brand} ${car.model} (${car.year}), ${car.mileage} km`);

car.mileage += 1000;
    console.log(`After the trip to Salalah: ${car.mileage} km`);

car.color = "white";
console.log(`Color: ${car.color}`);