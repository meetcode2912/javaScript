let i = 1;
do {
    console.log("Value: " + i);
    i++;
} while (i <= 5);


// Output:
// Value: 1
// Value: 2
// Value: 3
// Value: 4
// Value: 5

// Note: do...while loop me pehle code block execute hota hai, fir condition check hoti hai.
// Isliye kam se kam ek baar to code block execute hoga chahe condition false hi kyu na ho.
// Hindi Explanation:
// do...while loop ek aisa loop hai jo kam se kam ek baar to code block ko execute karta hai, uske baad condition check karta hai.
// Syntax:
// do {
//     // code to be executed
// } while (condition);
// Yaha par code block tab tak execute hota rahega jab tak condition true rahegi.
// Agar condition false ho jati hai to loop terminate ho jata hai.