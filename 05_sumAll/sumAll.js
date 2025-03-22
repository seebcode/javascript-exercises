const sumAll = function(x, y) {
    if (
        x < 0 || y < 0 || 
        !(typeof x === 'number' && !Number.isNaN(x)) || 
        !(typeof y === 'number' && !Number.isNaN(y)) ||
        !(Number.isSafeInteger(x)) || !(Number.isSafeInteger(y))
    ) {
        return "ERROR";
    }

    // if first number is greater than last number, numbers should be swapped to ensure loop executes correctly
    if (x > y) {
        const temp = x;
        x = y;
        y = temp;
    }

    let sum = 0;
    for (let i = x; i <= y; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
