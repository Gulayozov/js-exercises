const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function removeDuplicates() {
    rl.question("Enter an array of numbers separated by commas: ", (input) => {
        const numbers = input.split(',').map(Number);
        const uniqueNumbers = [...new Set(numbers)];
        console.log(`Unique Numbers: ${uniqueNumbers}`);
        rl.close();
    });
}

removeDuplicates();
