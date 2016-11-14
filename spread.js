var numbersArray = process.argv.slice(2);
var min = Math.min(...numbersArray);

console.log("The minimum of [" + numbersArray + "] is " + min);
