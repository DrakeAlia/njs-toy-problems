// Print all even numbers from 0 – 10 or 10,000

// Try to make the solution to this problem as efficiently as 
// possible. Consider using loops that would allow you to type the 
// fewest characters/commands. While you could simply print the even 
// numbers, get creative and see how you could output them in a way 
// that would work up to 10 or even up to 10,000 with little extra 
// effort.

const evenNumbers = () => {
    for (let i = 0; i <= 10; i++) {
        if (i % 2 === 0) {
            console.log(`${i} is an EVEN number!`);
        } else {
            console.log(`${i} is an ODD number!`);
        }
    }
};

evenNumbers();

// 2.

// Passing in a number as an argument
const evenNumbers2 = (x: number) => {
  // Create a for loop that iterates from 0 to x
  for (let i = 0; i <= x; i++) {
    // Check if i is an even number
    if (i % 2 === 0) {
      // If i is an even number, log this
      console.log(`${i} is an EVEN number!`);
    } else {
      // If i is not an even number, log this
      console.log(`${i} is an ODD number!`);
    }
  }
};

// Call the function and pass in a number as the argument
evenNumbers2(50);


// 3.

function evenNums3() {
  for (let i = 0; i <= 10; i += 2) {
    console.log(i);
  }
}

evenNums3();
