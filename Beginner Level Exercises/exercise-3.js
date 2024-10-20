const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function oddEven() {
    rl.question("Enter a number: ", (num) => {
        const number = parseInt(num);
        const result = (number % 2 === 0) ? 'Even' : 'Odd';
        console.log(`${number} is ${result}`);
        rl.close();
    });
}

oddEven();
