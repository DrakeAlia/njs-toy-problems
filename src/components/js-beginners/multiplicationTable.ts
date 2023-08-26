// Print a table containing multiplication tables

// Let’s start with the tables that many of us had to memorize in 
// school. Can you print a table that contains all the answers to 
// the multiplication tables from 1 through 10?

// Like Challenge #1, can you create an efficient solution that you 
// could easily expand should you need the 12 times table?

function multiplicationTable() {
    // Create a variable to hold the table
    let table = '';

    // Create a loop that runs 10 times
    for (let i = 1; i <= 10; i++) {
        // Create a loop that runs 10 times
        for (let j = 1; j <= 10; j++) {
            // Add the product of i and j to the table
            table += `${i * j}\t`;
        }
        // Add a newline to the table
        table += '\n';
    }

    // Return the table
    return table;
}

// Call the function and output the table.
console.log(multiplicationTable());