const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function sortString(str) {
    return str.toLowerCase().split('').sort().join('');
}

function anagram() {
    rl.question("Enter the first string: ", (str1) => {
        rl.question("Enter the second string: ", (str2) => {
            const isAnagram = sortString(str1) === sortString(str2);
            console.log(`Are anagrams: ${isAnagram}`);
            rl.close();
        });
    });
}

anagram();
