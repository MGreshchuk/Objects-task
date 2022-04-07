function getSum() {
    const numbers = Array.prototype.slice.call(arguments);
    const multiplier = numbers.shift();
    const base = numbers.shift();
    const sum = numbers.reduce((accumulator, num) => accumulator + num, base);
    return multiplier * sum;
};
let result = getSum(1, 2, 3, 4, 5);
console.log("result = ", result);