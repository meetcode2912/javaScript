let day = 3;

switch(day) {
    case 1: console.log("Monday"); break;
    case 2: console.log("Tuesday"); break;
    case 3: console.log("Wednesday"); break;
    case 4: console.log("Thursday"); break;
    case 5: console.log("Friday"); break;
    case 6: console.log("Saturday"); break;
    case 7: console.log("Sunday"); break;
    default: console.log("Invalid Day");
}


// Output: Wednesday
// Note: switch statement me har case ke baad break lagana zaroori hai, warna next case bhi execute ho jayega.
// Hindi Explanation:
// switch statement ek conditional statement hai jo multiple conditions ko check karta hai.
// 
/* Syntax: 
  switch(expression) 
  { case value1: // code to be executed; break; 
   case value2: // code to be executed; break; ... 
   default: // code to be executed if no case matches; }
 */
// Expression ke value ke basis par matching case execute hota hai.
// Agar koi case match nahi karta to default block execute hota hai (agar diya ho).
// Har case ke baad break lagana zaroori hai, warna next case bhi execute ho jayega.