const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function wordCount() {
    rl.question("Enter a sentence: ", (sentence) => {
        const words = sentence.toLowerCase().split(/\s+/);
        const wordCount = words.reduce((count, word) => {
            count[word] = (count[word] || 0) + 1;
            return count;
        }, {});
        console.log(`Word Count: ${JSON.stringify(wordCount)}`);
        rl.close();
    });
}

wordCount();

