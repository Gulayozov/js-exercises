const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function arraySorting() {
    rl.question("Enter an array of numbers separated by commas: ", (input) => {
        const numbers = input.split(',').map(Number);
        const sorted = numbers.sort((a, b) => a - b);
        console.log(`Sorted Array: ${sorted}`);
        rl.close();
    });
}

arraySorting();

