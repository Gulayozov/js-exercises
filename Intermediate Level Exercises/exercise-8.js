const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function getUniqueValues() {
    rl.question("Enter an array of values separated by commas: ", (input) => {
        const values = input.split(',');
        const uniqueValues = [...new Set(values)];
        console.log(`Unique Values: ${uniqueValues}`);
        rl.close();
    });
}

getUniqueValues();

