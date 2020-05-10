const caesar = function (string, fullShift) {
  let shift = fullShift % 26;
  let shiftedString = "";
  for (i = 0; i < string.length; i++) {
    if (
      !(
        (string.charCodeAt(i) >= 65 && string.charCodeAt(i) <= 90) ||
        (string.charCodeAt(i) >= 97 && string.charCodeAt(i) <= 122)
      )
    ) {
      shiftedString += string.charAt(i);
    } else if (string.charAt(i) == string.charAt(i).toUpperCase()) {
      if (string.charCodeAt(i) + shift > 90) {
        shiftedString += String.fromCharCode(string.charCodeAt(i) + shift - 26);
      } else if (string.charCodeAt(i) + shift < 65) {
        shiftedString += String.fromCharCode(string.charCodeAt(i) + shift + 26);
      } else {
        shiftedString += String.fromCharCode(string.charCodeAt(i) + shift);
      }
    } else if (string.charCodeAt(i) + shift > 122) {
      shiftedString += String.fromCharCode(string.charCodeAt(i) + shift - 26);
    } else if (string.charCodeAt(i) + shift < 97) {
      shiftedString += String.fromCharCode(string.charCodeAt(i) + shift + 26);
    } else {
      shiftedString += String.fromCharCode(string.charCodeAt(i) + shift);
    }
  }
  return shiftedString;
};

module.exports = caesar;
