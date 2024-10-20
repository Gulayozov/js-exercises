const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function factorial() {
    rl.question("Enter a number: ", (num) => {
        let number = parseInt(num);
        let fact = 1;
        for(let i = number; i > 1; i--) {
            fact *= i;
        }
        console.log(`Factorial: ${fact}`);
        rl.close();
    });
}

factorial();
