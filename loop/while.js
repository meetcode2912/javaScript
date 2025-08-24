let i = 1;
while (i <= 5) {
    console.log(i);
    i++;
}
// Output: 1 2 3 4 5
// Note: while loop tab tak chalega jab tak condition true hai.
// Agar condition false ho jati hai to loop terminate ho jata hai.
// Hindi Explanation:
// while loop ek aisa loop hai jo tab tak chalta hai jab tak di gayi condition true hoti hai.
 /*
     Syntax:
     while (condition) 
        { // code to be executed }
 */
// Condition ke andar koi bhi expression ho sakta hai jo boolean value (true/false) return kare.
// Agar condition true hoti hai to loop ke andar ka code execute hota hai, phir se condition check ki jati hai.
// Yeh process tab tak repeat hota hai jab tak condition false nahi ho jati.
/* Note: while loop me agar condition kabhi false nahi hoti to yeh infinite loop me
  chala jayega, isliye dhyan rakhein ki condition kabhi false ho jaye. */