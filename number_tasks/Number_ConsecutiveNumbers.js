function consecutiveNumbers(number) {

    for (let i = 1; i < number; i++) {

        if (i % 2 === 0 && i % 3 === 0 && i % 5 === 0){

            console.log("CodilityTestCoders");
        } else if (i % 2 === 0 && i % 3 === 0) {

            console.log("CodilityTest");
        } else if (i % 2 === 0 && i % 5 === 0) {

            console.log("CodilityCoders");
        } else if (i % 3 === 0 && i % 5 === 0) {

            console.log("TestCoders");
        } else if (i % 2 === 0) {

            console.log("Codility");
        } else if (i % 3 === 0) {

            console.log("Coders");
        } else if (i % 5 === 0) {

            console.log("Test");
        }else {
            console.log(i);
        }
    }
}

consecutiveNumbers(24);