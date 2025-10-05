function generateRandomNumberWithTimestamp() {
  // Generate a random integer between 1 and 1000 (inclusive)
  const randomNumber = Math.floor(Math.random() * 1000) + 1;

  // Get the current timestamp
  const timestamp = new Date().toISOString(); // ISO 8601 format for consistency

  return {
    randomNumber: randomNumber,
    timestamp: timestamp
  };
}

const result = generateRandomNumberWithTimestamp();
console.log(result);