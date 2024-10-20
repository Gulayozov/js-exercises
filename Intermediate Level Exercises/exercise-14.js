function throttle(func, limit, duration) {
    let inThrottle;
    let startTime = Date.now();

    return function() {
        const args = arguments;
        const context = this;


        if (Date.now() - startTime < duration) {
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => {
                    inThrottle = false;
                }, limit);
            }
        }
    };
}

function logMessage() {
    console.log('Executed!');
}

const throttleLogMessage = throttle(logMessage, 1000, 4000);
setInterval(throttleLogMessage, 500);
