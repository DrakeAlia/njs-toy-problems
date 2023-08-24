// Remove the spaces found in a string

// Yet another way to clean up data is to remove any errors or unnecessary spaces. 
// This function will take in a string and then return it with all spaces removed. 
// Think about if you were tasked with cleaning up customer data at your job. You could scale 
// this function to clean up specific fields of data, such as zip codes.

// This function removes spaces from a string
// It takes a string as a parameter and returns that string without spaces
function removeSpace(str: string) {
    // This line will split the string at every space and return an array
    // The array will be ['This', 'is', 'a', 'test', 'string']
    // The join method will then join the array back together without spaces
    // This will return the string 'Thisisateststring'
    return str.split(' ').join('');
}

// This is the test string
const testString = 'This is a test string';

// Call the removeSpace function and pass in the testString variable
// Save the result of the function in the string variable
const string = removeSpace(testString);

// Log the string variable to the console
// This will print 'Thisisateststring'
console.log(string);