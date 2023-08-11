// Calculate the sum of numbers within an array

// You can create your own array of numbers but consider trying this problem with a few different sets to verify your solution. Have one array with negative and positive numbers and another with integers and decimals.

// You could also try using arrays of different lengths. If you’re feeling comfortable with this, try the slightly more challenging bonus challenge below.

// Bonus intermediate challenge: Create a function that can return the sum of a particular column or row number in a table.

function sumArray(arr: string | any[]) {
    // Create a variable to store the sum
    let sum = 0;
    // Loop through each element in the array
    for (let i = 0; i < arr.length; i++) {
        // Add the current element to the sum
        sum += arr[i];
        // Print the current sum
        console.log(sum);
    }
    // Return the sum
    return sum;
}

// Create an array of numbers
const numbers = [1, 2, 3, 4, 5];
// Call the sumArray function with the numbers array
const result = sumArray(numbers);
// Print the result of the sum
console.log(`The sum of the numbers in the array is ${result}!`);