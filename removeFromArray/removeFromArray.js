const removeFromArray = function() {
    mainArray = arguments[0];
    for (i = 1; i < arguments.length; i++){
        if (mainArray.indexOf(arguments[i]) != -1){
            mainArray.splice(mainArray.indexOf(arguments[i]), 1)
        }
    }
    return mainArray;
}


module.exports = removeFromArray
