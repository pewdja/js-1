
const convertToUpperCase = (str) => {
  return str.toUpperCase();
};

const calculateTax = (amount) => {
  return amount * 0.1;
};

const findMaximum = (num1, num2) => {
  return num1 >= num2 ? num1 : num2;
};

const isPalindrome = (str) => {
  if (str === "") return true;
  const reversed = str.split('').reverse().join('');
  return str === reversed;
};

const calculateDiscountedPrice = (price, discountPercentage) => {
  return price - (price * (discountPercentage / 100));
};

module.exports = {
  convertToUpperCase,
  calculateTax,
  findMaximum,
  isPalindrome,
  calculateDiscountedPrice
};
