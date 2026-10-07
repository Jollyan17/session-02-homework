// =============================================
// 5. OBJECTS — Order total with discount
// =============================================
// 1. Print every order line: name x quantity = price * quantity.
// 2. Calculate the subtotal.
// 3. If the subtotal is 5000 baisa or more, give a 10% discount, otherwise 0.
// 4. Print subtotal, discount and total.
//
// Expected output:
//   Mandi x 2 = 5000 baisa
//   Karak x 4 = 600 baisa
//   Luqaimat x 1 = 1000 baisa
//   Subtotal: 6600 baisa
//   Discount: 660 baisa
//   Total: 5940 baisa

const order = [
  { name: "Mandi", price: 2500, quantity: 2 },
  { name: "Karak", price: 150, quantity: 4 },
  { name: "Luqaimat", price: 1000, quantity: 1 },
];

// your code here


let subtotal = 0;


for (let i = 0; i < order.length; i++) {
    let linePrice = order[i].price * order[i].quantity;
    subtotal += linePrice;
    console.log(`${order[i].name} x ${order[i].quantity} = ${linePrice} baisa`);
}


let discount = 0;
if (subtotal >= 5000) {
    discount = subtotal * 0.10;
}

let total = subtotal - discount;


console.log(`Subtotal: ${subtotal} baisa`);
console.log(`Discount: ${discount} baisa`);
console.log(`Total: ${total} baisa`);