function printReverse(list) {
    list.reverse();
    list.forEach(function(item) {
        console.log(item);
    });
}

printReverse([1, 2, 3, 4, 5, 6, 7]);

function isUniform(list) {
    var set1 = new Set(list);
    return set1.size > 1 ? false : true; 
}

console.log(isUniform([1, 1, 1, 1]));
console.log(isUniform([2, 1, 1, 1]));

function sumArray(list) {
    var sum = list.reduce(function(total, current) {
        return total + current;
    });

    return sum;
}

console.log(sumArray([1, 2, 3]));
console.log(sumArray([10, 3, 10, 4]));
console.log(sumArray([-5, 100]));

function max(list) {
    var max = list.reduce(function(callback, current) {
        return Math.max(callback, current);
    });

    return max;
}

console.log(max([1, 2, 3]));
console.log(max([10, 3, 10, 4]));
console.log(max([-5, 100]));