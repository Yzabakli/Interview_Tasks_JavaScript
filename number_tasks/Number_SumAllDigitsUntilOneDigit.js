function sumAllDigitsUntilOneDigit(n){

    while (n > 9){

        let digit = n, sum = 0;

        while (digit > 0){

            sum +=  Math.floor(digit % 10);
            digit /= 10;

        }
        console.log(sum);

        n = sum;
    }
}

sumAllDigitsUntilOneDigit(797897);