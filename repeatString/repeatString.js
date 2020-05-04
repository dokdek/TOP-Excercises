const repeatString = function (string, amount) {
  let finalString = "";
  if (amount < 0) {
    finalString = `ERROR`;
  } else {
    for (i = 0; i < amount; i++) {
      finalString += string;
    }
  }
  return finalString;
};

module.exports = repeatString;
