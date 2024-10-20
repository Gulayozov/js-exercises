const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function numberToString() {
    rl.question("Enter a number: ", (num) => {
        const number = parseFloat(num);
        console.log(`String: ${number.toString()}`);
        rl.close();
    });
}

numberToString();
