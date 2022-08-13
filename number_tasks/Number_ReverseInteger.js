function reverseInteger(num){

    let temp = 0;

    while (Math.floor(num) !== 0){

        temp = temp * 10 + Math.floor(num % 10);
        num /= 10;
    }
    return temp;
}

console.log(reverseInteger(64386583573577));