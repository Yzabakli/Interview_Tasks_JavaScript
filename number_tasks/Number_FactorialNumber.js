function factorialNumber(number) {

    if (number === 0){
        return 1;
    }

    return number * factorialNumber(number - 1);
}
function factorialNumber2(number) {

    let factor = 1;

    while (number >= 2){

        factor *= number;
        number--;
    }
/*
    for (; number >= 2 ; number--) {

        factor *= number;
    }

 */
    return factor;
}

console.log(factorialNumber2(200));