// Function declaration
function squeredSum(number1, number2) {
    const squered1 = number1 * number1;
    const squered2 = number2 * number2;
    const sum = squered1 + squered2;
    const squered = sum * sum;
    return squered;
};

const result = squeredSum(2, 3);
console.log(result);

// Function expression
const squeredSum1 = function (number3, number4) {
    const squered3 = number3 * number3;
    const squered4 = number4 * number4;
    const sum1 = squered3 + squered4;
    const squered1 = sum1 * sum1;
    return squered1;
};

const result1 = squeredSum1(2, 3);
console.log(result1);

// Arrow function
const squeredSum2 = (number5, number6) => {
    const squered5 = number5 * number5;
    const squered6 = number6 * number6;
    const sum2 = squered5 + squered6;
    const squered2 = sum2 * sum2;
    return squered2;
};

const result2 = squeredSum2(2, 3);
console.log(result2)
