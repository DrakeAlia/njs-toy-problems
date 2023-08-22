// Create a function that reverses an array

// This challenge is particularly helpful if you’re planning to become a Data Scientist. 
// Manipulating data is a significant part of the role, and building the foundations now will help you 
// later down the road when you’re working with large databases.

// Start small here and work your way up. Begin with an array of 5 numbers, and then try your program with a 
// larger array to verify its success.


// Create a function called reverseArray that takes an array as an argument
function reverseArray(arr: string | any[]) {
    // Create an empty array to hold the reversed array
    let newArray = [];
    // Loop through the array backwards
    for (let i = arr.length - 1; i >= 0; i--) {
        console.log(newArray)
        // Push each element into the new array
        newArray.push(arr[i])
    }
    // Return the new array
    return newArray;
}

// Log the result of passing [1, 2, 3, 4, 5] into the function
console.log(reverseArray([1, 2, 3, 4, 5]))