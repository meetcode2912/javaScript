let aree = [12,34,45,4,56];
for (let newArre of aree) {
    console.log(newArre);
}


// Output:
// 12
// 34
// 45
// 56

// Note: for...of loop array ke elements par iterate karta hai aur har element ko ek variable me store karke loop ke andar use karta hai.
// Hindi Explanation:
// for...of loop ka use hum tab karte hain jab hume kisi array ke har element par iterate karna hota hai.
 /* 
    Syntax: 
   for (let element of array)
  {  code to be executed for each element } 
 */
// Har iteration me array ka next element variable (yaha newArre) me store hota hai aur loop ke andar use kiya ja sakta hai.