function printReverse(list) {
    list.reverse();
    list.forEach(function(item) {
        console.log(item);
    });
}

printReverse([1,2,3,4,5,6,7]);

function isUniform(list) {
    var set1 = new Set(list);
    return set1.size > 1 ? false : true; 
}

console.log(isUniform([1,1,1,1]));
console.log(isUniform([2,1,1,1]));
