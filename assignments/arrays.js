// Write a function printReverse() that takes 
// an array as an argument and prints out 
// the elements in the array in reverse order
// (don't actually reverse the array itself)

function printReverse(list) {
    for (let i = list.length - 1; i >= 0; i--) {
        console.log(list[i]);
    }
}

// Write a function isUniform() which takes
// an array as an argument and returns true
// if all elements in the array are identical

function isUniform(list) {
    var set1 = new Set(list);
    return set1.size > 1 ? false : true; 
}

// Write a function sumArray() that accepts
// an array of numbers and returns the sum
// of all numbers in the array

function sumArray(list) {
    var sum = list.reduce(function(total, current) {
        return total + current;
    });
    return sum;
}

// Write a function max() that accepts 
// an array of numbers and returns 
// the maximum number in the array

function max(list) {
    var max = list.reduce(function(callback, current) {
        return Math.max(callback, current);
    });
    return max;
}
