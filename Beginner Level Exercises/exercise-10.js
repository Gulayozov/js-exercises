const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function calculator(operation) {
    rl.question("Enter the first number: ", (num1) => {
        rl.question("Enter the second number: ", (num2) => {
            const number1 = parseFloat(num1);
            const number2 = parseFloat(num2);
            let result;

            switch(operation) {
                case 'add': result = number1 + number2; break;
                case 'subtract': result = number1 - number2; break;
                case 'multiply': result = number1 * number2; break;
                case 'divide': result = number1 / number2; break;
                default: result = 'Invalid operation'; break;
            }

            console.log(`Result: ${result}`);
            rl.close();
        });
    });
}

// Can change the operation if needed. All operations: 'add', 'subtract', 'multiply', or 'divide'
calculator('divide');
