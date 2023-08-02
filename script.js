//your JS code here. If required.
function findFirstNonRepeatedCharacter(inputString) {
  const charCount = {};

  // Count the occurrences of each character
  for (const char of inputString) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  // Find the first non-repeated character
  for (const char of inputString) {
    if (charCount[char] === 1) {
      return char;
    }
  }

  return null; // No non-repeated character found
}

// Get input from the user
const userInput = prompt("Enter a string:");

if (userInput) {
  const result = findFirstNonRepeatedCharacter(userInput);

  if (result) {
    alert(`The first non-repeated character is: ${result}`);
  } else {
    alert("No non-repeated character found in the input.");
  }
}
