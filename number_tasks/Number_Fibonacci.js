function fibonacci(number) {

    let j = 0;
    let z = 1;

    for (let i = 1; i < number; i++) {

        z += j;

        j = z - j;
    }
    return z;
}
console.log(fibonacci(10));