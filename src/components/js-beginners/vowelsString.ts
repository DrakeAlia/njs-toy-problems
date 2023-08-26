// Return the number of vowels in a string

// Create a function that’ll return an integer of the number of vowels found in a string. This 
// is a great way to practice determining the features of a dataset. If you use JavaScript 
// later in your career, you’ll be well-prepared to determine what datasets (or just strings) 
// consist of. If you feel like an extra challenge, consider returning the number of characters.


// Declare a function that accepts a string parameter.
function countVowels(str: string) {
    // Declare a string of vowels.
    const vowels = 'aeiou';
    // Declare a variable to count the vowels.
    let count = 0;

    // Loop through each character in the string.
    for (let char of str) {
        // If the string of vowels includes the current character,
        // increase the counter by 1.
        if (str.includes(char)) {
            count++;
        }
    }
    // Return the number of vowels.
    return count;
}

// Declare a string variable.
const inputString = "This is a string with vowels, consonants, and spaces.";
// Call the function and pass in the string.
const vowelsCounnt = countVowels(inputString);
// Output the number of vowels in the string.
console.log(`The number of vowels in the string is ${vowelsCounnt}.`);