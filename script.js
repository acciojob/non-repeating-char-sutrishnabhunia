function firstNonRepeatedCharacter(inputString) {
  // Create an object to store character frequency
  const charFrequency = {};

  // Count the frequency of each character
  for (const char of inputString) {
    charFrequency[char] = (charFrequency[char] || 0) + 1;
  }

  // Find the first non-repeated character
  for (const char of inputString) {
    if (charFrequency[char] === 1) {
      return char;
    }
  }

  return null; // Return null if no non-repeated character is found
}

// Get input from the user using prompt
const userInput = prompt('Enter a string:');

// Call the function and show the result using an alert
const result = firstNonRepeatedCharacter(userInput);

if (result !== null) {
  alert(`The first non-repeated character is: ${result}`);
} else {
  alert('No non-repeated character found in the input.');
}
