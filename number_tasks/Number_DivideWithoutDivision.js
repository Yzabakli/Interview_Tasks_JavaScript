function divide(dividend, divisor) {

    let result = 0;

    while (dividend >= divisor){

        dividend -= divisor;
        result++;
    }
    return {"Quotient": result, "Remainder": dividend}
}

console.log(divide(75,4))