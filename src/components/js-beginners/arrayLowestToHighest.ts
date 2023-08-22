// Sort an array from lowest to highest

// You could create a function for this solution as well, but be sure to try your program with varying lengths
// and types of arrays. Try one with all integers, another with negative numbers, and another with decimals.

const sortNumbers = [6, 4, 1, 10, 2, 5, 3, 11, 9, 7, 8];

sortNumbers.sort((a, b) => a - b);
console.log(sortNumbers);

// Create a function that sorts an array from lowest to highest

// Sorts an array of numbers in ascending order
const sortArray = (arr: number[]) => {
  // Uses the Array.sort() method with a compare function to sort the array
  arr.sort((a, b) => a - b);
  // Returns the sorted array
  return arr;
};
// Prints [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
console.log(sortArray([6, 4, 1, 10, 2, 5, 3, 11, 9, 7, 8]));