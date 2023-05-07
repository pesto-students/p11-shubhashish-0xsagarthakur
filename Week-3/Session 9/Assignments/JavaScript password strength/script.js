// Your solution goes here 
const isStrongPassword = (password) => {
    return password.length > 8 
        && !password.toLowerCase().includes("password")
        && /[A-Z]/.test(password);


// // Check length
//   if (password.length < 8) {
//     return false;
//   }

//   // Check for "password"
//   if (password.toLowerCase().includes("password")) {
//     return false;
//   }

//   // Check for uppercase character
//   if (!/[A-Z]/.test(password)) {
//     return false;
//   }

//   // All checks passed
//   return true;
}

//To test code in your web browser, call isStrongPassword() from the JavaScript console
// isStrongPassword("Qwerty"); // false - Too short
// isStrongPassword("passwordQwerty") // false - Contains "password"
// isStrongPassword("qwerty123") // false - No uppercase characters
// isStrongPassword("Qwerty123") // true
