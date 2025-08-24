let user = "admin";
let pass = "1234";

if (user === "admin") {
    if (pass === "1234") {
        console.log("Login successful!");
    } else {
        console.log("Wrong password");
    }
} else {
    console.log("User not found");
}


// Output: Login successful!


// Note: Nested if statements me ek if statement ke andar doosri if statement hoti hai.
// Agar outer if condition true hoti hai to hi inner if condition check hoti hai.
// Agar outer if condition false hoti hai to inner if block skip kar diya jata hai.
// Hindi Explanation:
// Nested if statements ka use tab hota hai jab hume multiple conditions check karni hoti hain.
// Pehle outer condition check hoti hai, agar wo true hoti hai to hi inner condition check hoti hai.
// Agar outer condition false hoti hai to inner block execute nahi hota aur else block (agar ho) execute hota hai.
// Syntax:
// if (outer_condition) {
//     if (inner_condition) {
//         // code to be executed if both conditions are true
//     } else {
//         // code to be executed if outer_condition is true but inner_condition is false
//     }
// } else {
//     // code to be executed if outer_condition is false
// }


