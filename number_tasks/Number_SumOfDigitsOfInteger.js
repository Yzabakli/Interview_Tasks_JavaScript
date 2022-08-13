function getSum(n) {
    let sum = 0;

    while (n > 0) {

        sum = sum + n % 10;
        n = Math.floor(n / 10);
    }
    return sum;
}

console.log(`${getSum(1234)}`);