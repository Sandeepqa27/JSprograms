// Generate a unique email using timestamp
function generateUniqueEmail() {
  const timestamp = Date.now(); // current time in ms
  return `testuser+${timestamp}@example.com`;
}

let randomem=generateUniqueEmail();
console.log(randomem.substring(0,15));
