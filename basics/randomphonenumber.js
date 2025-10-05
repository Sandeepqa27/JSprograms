function getUniquePhoneNumber() {
  // Generates a random 10-digit phone number starting with 9
  const prefix = '9';
  const randomDigits = Math.floor(100000000 + Math.random() * 900000000);
  return prefix + randomDigits.toString();
}

// Example usage:
const phoneNumber = getUniquePhoneNumber();
console.log(phoneNumber);