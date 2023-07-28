// 1. Print all even numbers from 0 – 10

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

// passing in a number as an argument
const evenNumbers2 = (x: number) => {
  for (let i = 0; i <= x; i++) {
    if (i % 2 === 0) {
      console.log(`${i} is an EVEN number!`);
    } else {
      console.log(`${i} is an ODD number!`);
    }
  }
};

evenNumbers2(50);

