const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function prime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

function findPrimes() {
    rl.question("Enter a limit: ", (limit) => {
        const primes = [];
        for (let i = 2; i <= limit; i++) {
            if (prime(i)) {
                primes.push(i);
            }
        }
        console.log(`Prime numbers up to ${limit}: ${primes}`);
        rl.close();
    });
}

findPrimes();
