var count = -10;

// Print all numbers between -10 and 19
while (count <= 19) {
    console.log(count);
    count++;
}

count = 10;

// Print all even numbers between 10 and 40
while (count <= 40) {
    if (count % 2 === 0) {
        console.log(count);
    }
    count++;
}

count = 300;

// Print all odd numbers between 300 and 333
while (count <= 333) {
    if (count % 2 === 1) {
        console.log(count);
    }
    count++;
}

count = 5;

// Print all numbers divisible by 5 AND 3 between 5 and 50
while (count <= 50) {
    if (count % 5 === 0 && count % 3 === 0) {
        console.log(count);
    }
    count++;
}
