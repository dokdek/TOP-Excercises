const fibonacci = function(index) {
    let num1 = 0;
    let num2 = 1;
    let finalSum = 1;
    if (index < 0){
        return 'OOPS';
    }
    for (i = 1; i < index; i++){
        let sum = num1 + num2;
        num1 = num2;
        num2 = sum;
    }
    return num2;
}

module.exports = fibonacci
