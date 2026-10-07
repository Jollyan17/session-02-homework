// =============================================
// 5. OBJECTS — Cafe menu
// =============================================
// 1. Print only the items where category is "drink".
// 2. Find and print the cheapest item on the menu.
//
// Expected output:
//   Drinks:
//   - Karak: 150 baisa
//   - Fresh juice: 800 baisa
//   Cheapest: Karak (150 baisa)

const menu = [
  { name: "Shawarma", price: 600, category: "food" },
  { name: "Karak", price: 150, category: "drink" },
  { name: "Mandi", price: 2500, category: "food" },
  { name: "Fresh juice", price: 800, category: "drink" },
  { name: "Luqaimat", price: 1000, category: "dessert" },
];

// your code here

console.log("Drinks:");
for (let i = 0; i < menu.length; i++) {
    if (menu[i].category === "drink") {
        console.log(` - ${menu[i].name}: ${menu[i].price} baisa`);
    }
}

let cheapestItem = menu[0];
for (let i = 1; i < menu.length; i++) {
    if (menu[i].price < cheapestItem.price) {
        cheapestItem = menu[i];
    }
}
console.log(`Cheapest: ${cheapestItem.name} (${cheapestItem.price} baisa)`);