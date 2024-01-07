// Function to filter positive numbers from an array
function filterPositiveNumbers(numbers) {
    // Use the Array.filter() method to create a new array with only positive numbers
    const positiveNumbers = numbers.filter(function(number) {
        // The callback function returns true for positive numbers and false for non-positive numbers
        return number > 0;
    });

    // Return the new array containing positive numbers
    return positiveNumbers;
}

// Example usage:
const inputArray = [1, -2, 3, -4, 5];
const resultArray = filterPositiveNumbers(inputArray);

// Output the result
console.log(resultArray); // Output: [1, 3, 5]
