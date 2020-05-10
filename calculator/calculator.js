function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function sum(numArray) {
  let sum = 0;
  for (i = 0; i < numArray.length; i++) {
    sum += numArray[i];
  }
  return sum;
}

function multiply(numArray) {
  let product = 1;
  for (i = 0; i < numArray.length; i++) {
    product = product * numArray[i];
  }
  return product;
}

function power(num, exponent) {
  return Math.pow(num, exponent);
}

function factorial(num) {
  let factorial = 1;
  if (num == 0) {
    return 1;
  } else {
    for (i = 1; i <= num; i++) {
      factorial = factorial * i;
    }
  }
  return factorial;
}

module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
