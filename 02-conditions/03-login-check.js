// =============================================
// 2. CONDITIONS — Login check
// =============================================
// The correct login is stored below. The user typed username and password.
// Print:
//   "User not found"   if the username is wrong
//   "Wrong password"   if the username is right but the password is wrong
//   "Welcome, salim!"  if both are right
// Then change password to "oman2026" and check that you get the welcome message.
//
// Expected output:
//   Wrong password

const correctUsername = "salim";
const correctPassword = "oman2026";

const username = "salim";
const password = "muscat";

// your code here

if (username !== correctUsername) {
    console.log("User not found");
} else if (password !== correctPassword) {
    console.log("Wrong password");
} else {
    console.log(`Welcome, ${correctUsername}!`);
}