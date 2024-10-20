const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function celsiusToFarenheit() {
    rl.question("Enter a temperature in Celsius: ", (celsius) => {
        const fahrenheit = (parseFloat(celsius) * 9/5) + 32;
        console.log(`In Fahrenheit: ${fahrenheit}`);
        rl.close();
    });
}

celsiusToFarenheit();

