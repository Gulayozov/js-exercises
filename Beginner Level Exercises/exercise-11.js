const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function arraySum() {
    rl.question("Enter an array of numbers separated by commas: ", (input) => {
        const numbers = input.split(',').map(Number);
        const sum = numbers.reduce((acc, curr) => acc + curr, 0);
        console.log(`Sum: ${sum}`);
        rl.close();
    });
}

arraySum();
