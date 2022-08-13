function isArmstrong(number) {

    const numberToString = number.toString();

    const power = numberToString.length;

    let sum = 0;

    for (let i = 0; i < power;) {

        sum += Math.pow(Number.parseInt(numberToString.substring(i, ++i)), power);
    }
    return sum === number;
}

console.log(isArmstrong(1741725));