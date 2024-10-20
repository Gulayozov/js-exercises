const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function checkSubstring() {
    rl.question("Enter the main string: ", (mainStr) => {
        rl.question("Enter the substring to search: ", (substring) => {
            const isPresent = mainStr.includes(substring);
            console.log(`Substring present: ${isPresent}`);
            rl.close();
        });
    });
}

checkSubstring();
