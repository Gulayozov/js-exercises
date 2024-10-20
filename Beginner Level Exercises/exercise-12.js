const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function RandomNumber() {
    rl.question("Enter minimum value range: ", (min) => {
        rl.question("Enter maximum value range: ", (max) => {
            const minValue = parseInt(min);
            const maxValue = parseInt(max);
            const random = Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
            console.log(random);
            rl.close();
        });
    });
}

RandomNumber();
