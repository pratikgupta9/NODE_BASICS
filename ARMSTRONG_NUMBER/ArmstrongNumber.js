function verifyIfArmStrongNumber(number) {

    const numberOfDigits = number.length

    let sum = 0

    let temp = parseInt(number)

    while (temp > 0) {

        let remainder = temp % 10

        console.log("remainder", remainder, temp)

        sum += remainder ** numberOfDigits

        temp = parseInt(temp / 10);

    }

    if (sum == parseInt(number)) {
        console.log(`${number} is an Armstrong number`);
        return true
    }
    else {
        console.log(`${number} is not an Armstrong number.`);
        return false
    }

}

console.log(verifyIfArmStrongNumber("92727"));