const sumAll = function (num1, num2) {
  let sum = 0;
  if (num1 < 0 || num2 < 0) {
    return "ERROR";
  } else if (!(typeof num1 == "number" && typeof num2 == "number")) {
    return "ERROR";
  } else if (num1 > num2) {
    let numDiff = num1 - num2;
    for (i = 0; i <= numDiff; i++) {
      sum += num2 + i;
    }
  } else {
    let numDiff = num2 - num1;
    for (i = 0; i <= numDiff; i++) {
      sum += num1 + i;
    }
  }
  return sum;
};

module.exports = sumAll;
