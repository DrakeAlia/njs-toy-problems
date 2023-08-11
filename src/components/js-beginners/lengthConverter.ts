// Create a length converter function

// Creating a function is a skill that’ll be useful in many settings, 
// and as you progress, you’ll be working on much more 
// complicated functions than this one. But a function that converts 
// units of measure can be pretty handy in multiple professions and 
// industries.

// Let’s start with a conversion from kilometers to miles. The function 
// should include the input in kilometers and return the answer in miles.

// The function converts kilometers to miles
function convertKilometersToMiles(kilometers: any) {
    // One kilometer is equal to 0.621371 miles
    const milesPerKilometer = 0.621371;
    // Multiply the kilometers input by the miles per kilometer to get the miles output
    const miles = kilometers * milesPerKilometer;
    // Return the miles output
    return miles;
}

// Set the input to 10 kilometers
const kilometerInput = 10;
// Convert the kilometers to miles with the function
const milesOutput = convertKilometersToMiles(kilometerInput);
// Log the output to the console
console.log(`${kilometerInput} kilometers is equal to ${milesOutput.toFixed(2)} miles!`);