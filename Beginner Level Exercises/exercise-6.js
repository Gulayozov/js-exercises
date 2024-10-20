const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function checkPalindrome() {
    rl.question("Enter a string: ", (str) => {
        const isPalindrome = str === str.split('').reverse().join('');
        console.log(`Is palindrome: ${isPalindrome}`);
        rl.close();
    });
}

checkPalindrome();
