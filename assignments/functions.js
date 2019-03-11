function isEven(number) {
    if (number % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

function factorial(number) {
    var result = 1;
    while (number > 0) {
        result *= number;
        number--;
    }
    return result;
}

function kebabToSnake(word) {
    return word.replace(/-/g, '_');
}
