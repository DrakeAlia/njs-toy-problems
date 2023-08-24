// Return a Boolean if a number is divisible by 10

// Here, you’ll create a function that’ll give you a “true” or “false” Boolean as its output. 
// The inputted number should only return a “true” if it’s divisible by 10. Otherwise, your program 
// should return a “false” answer.


function divisibleBy10(x: number) {
    // Check if x is divisible by 10
    if (x % 10 === 0) {
        // If x is divisible by 10, return true
        return true;
    } else {
        // If x is not divisible by 10, return false
        return false;
    }
}

console.log(divisibleBy10(20));



// Here’s another way to write the same function. This time, you’ll use a ternary operator to
// write the function in a single line of code.
function divisible10(x: number) {
  return x % 10 === 0;
}

console.log(divisible10(30));