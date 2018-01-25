function generateRandomHash(numOfDigits = 10) {
  const randomDecimalString = Math.random().toString();
  
  return randomDecimalString.slice(2, numOfDigits + 2);
}

module.exports = generateRandomHash;
