const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function capitalize() {
    rl.question("Enter a sentence: ", (sentence) => {
        const capitalized = sentence.replace(/\b\w/g, (c) => c.toUpperCase());
        console.log(`Capitalized version: ${capitalized}`);
        rl.close();
    });
}

capitalize();
