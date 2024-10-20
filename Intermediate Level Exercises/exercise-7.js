const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function flattenArray(arr) {
    return arr.reduce((flat, toFlatten) => flat.concat(Array.isArray(toFlatten) ? flattenArray(toFlatten) : toFlatten), []);
}

function promptFlattenArray() {
    rl.question("Enter a nested array (e.g., [1, [2, [3, 4]]]): ", (input) => {
        const array = JSON.parse(input);
        const flattened = flattenArray(array);
        console.log(`Flattened Array: ${flattened}`);
        rl.close();
    });
}

promptFlattenArray();
