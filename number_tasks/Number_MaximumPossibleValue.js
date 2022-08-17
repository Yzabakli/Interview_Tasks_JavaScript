function maximumPossibleValue(number) {

    let numberToString = "";

    if (number > 0){

        numberToString = number.toString();

        for (let i = 0; i < numberToString.length; i++) {

            if (parseInt(numberToString.charAt(i)) < 5){

                return parseInt(numberToString.substring(0,i) + "5" + numberToString.substring(i));
            }
        }
        return parseInt(numberToString + "5");

    }else if (number < 0){

        numberToString = -number.toString();

        for (let i = 0; i < numberToString.length; i++) {

            if (parseInt(numberToString.charAt(i)) > 5){

                return -parseInt(numberToString.substring(0,i) + "5" + numberToString.substring(i));
            }
        }
        return parseInt( "5" + numberToString) * -1;
    }else return 50;
}

console.log(maximumPossibleValue(0));