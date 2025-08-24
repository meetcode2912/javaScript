console.log(5 == "5");   // true  (only value compare)
console.log(5 === "5");  // false (value + type compare)
console.log(5 != "5");   // false
console.log(5 !== "5");  // true
console.log(10 > 5);     // true
console.log(10 < 5);     // false
console.log(10 >= 10);   // true
console.log(10 <= 9);    // false

// Hindi Explanation:
// ==  (do value ko compare karta hai, type nahi dekhta)
// === (do value ko compare karta hai, saath me type bhi check karta hai)
// !=  (do value ko compare karta hai, agar value same nahi hai to true return karta hai)
// !== (do value ko compare karta hai, agar value ya type same nahi hai to true return karta hai)
// >   (bada hai ya nahi check karta hai)
// <   (chhota hai ya nahi check karta hai)
// >=  (bada ya barabar hai ya nahi check karta hai)
// <=  (chhota ya barabar hai ya nahi check karta hai)
// Note: Comparison operators ka result hamesha boolean (true/false) hota hai.
