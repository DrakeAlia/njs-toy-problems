// Calculate the sum of numbers within an array

// You can create your own array of numbers but consider trying this problem with a few different sets to 
// verify your solution. Have one array with negative and positive numbers and another with integers and 
// decimals.
// You could also try using arrays of different lengths. If you’re feeling comfortable with this, 
// try the slightly more challenging bonus challenge below.

// Bonus intermediate challenge: Create a function that can return the sum of a particular 
// column or row number in a table.



// This function takes in an array and returns the sum of all the values in that array.
function sumArray(arr: string | any[]) {
  // Create a variable that will store the sum of all the values.
  let sum = 0;
  // Loop through the array, adding each value to the sum.
  for (let i = 0; i < arr.length; i++) {
    // Add the current value of the array to the sum.
    sum += arr[i];
    // Print the sum to the console.
    console.log(sum);
  }
  // Return the sum.
  return sum;
}

// Create an array of numbers.
const numbersArr = [1, 2, 3, 4, 5];
// Call the sumArray function and store the result in a variable.
const result = sumArray(numbersArr);
// Print the result to the console.
console.log(`The sum of the numbers in the array is ${result}!`);