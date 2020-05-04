const reverseString = function(initialString) {
    let reversedString = '';
    for (i = 0; i < initialString.length; i++){
        reversedString = reversedString + initialString.charAt(initialString.length - 1 - i);
    }
return reversedString;
}


module.exports = reverseString
