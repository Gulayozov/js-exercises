const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function findIntersection(arr1, arr2) {
    return arr1.filter(value => arr2.includes(value));
}

function promptArrayIntersection() {
    rl.question("Enter the first array of numbers separated by commas: ", (input1) => {
        rl.question("Enter the second array of numbers separated by commas: ", (input2) => {
            const arr1 = input1.split(',').map(Number);
            const arr2 = input2.split(',').map(Number);
            const intersection = findIntersection(arr1, arr2);
            console.log(`Intersection: ${intersection}`);
            rl.close();
        });
    });
}

promptArrayIntersection();

