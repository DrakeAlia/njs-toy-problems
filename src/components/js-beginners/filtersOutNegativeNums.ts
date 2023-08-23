// Create a function that filters out negative numbers

// In this challenge, you’ll have a function that takes an array as an input and returns an array. But if all
// goes according to plan, it’ll remove the negative numbers. This is another example of a task that’ll be useful
// when combing through data and looking for clever ways to eliminate “bad data.”

// Function takes an array of numbers as input
function filterNums(arr: any[]) {
  // Return the new array by using the filter method to create a new array containing
  // only the numbers that are greater than or equal to zero
  return arr.filter((number) => number >= 0);
}

// Create an array of numbers
const numbers = [-1, 2, -3, 4, -5, 6, -7, 8, -9, 10];
// Call the filterNums function and store the result in a variable
const positiveNumbers = filterNums(numbers);
// Print the result to the console
console.log(positiveNumbers);
