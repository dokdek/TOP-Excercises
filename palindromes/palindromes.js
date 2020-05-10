const palindromes = function (dirtyString) {
  let cleanString = dirtyString.replace(/[^a-zA-Z]/g, "");
  cleanString = cleanString.toLowerCase();
  let reverseString = "";
  for (i = 0; i <= cleanString.length; i++) {
    reverseString += cleanString.charAt(cleanString.length - i);
  }
  if (reverseString == cleanString) {
    return true;
  } else {
    return false;
  }
};

module.exports = palindromes;
