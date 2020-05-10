const getTheTitles = function(bookArray) {
    let titleArray = [];
    for(i = 0; i < bookArray.length; i++){
        titleArray.push(bookArray[i].title);
    }
    return titleArray;
}

module.exports = getTheTitles;
