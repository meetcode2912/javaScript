  let atimList = {name: "manish", age: 21, city: "delhi"};
   for (let key in atimList) {
    console.log(key);
    console.log(atimList[key]);
   }



   // Hindi Explanation:
    // for...in loop object ke properties par iterate karne ke liye use hota hai.
    // Syntax: for (let key in object) { // code to be executed }
    // Har iteration me key variable me object ki ek property ka naam aata hai.
    // Aap is key ka use karke us property ki value ko access kar sakte hain.
    // Note: for...in loop me properties ka order guaranteed nahi hota.
    // Agar aapko properties ka order chahiye to aap Object.keys() method ka use kar sakte hain.
    // Example:
    // let obj = {a: 1, b: 2, c: 3};
    // for (let key in obj) {
    //     console.log(key);        // Output: a b c (order may vary)
    //     console.log(obj[key]);   // Output: 1 2 3
    // }