const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function max() {
    rl.question("List numbers separated by commas: ", (input) => {
        const numbers = input.split(',').map(Number);
        const largest = Math.max(...numbers);
        console.log(`${largest} is the largest number`);
        rl.close();
    });
}

max();
