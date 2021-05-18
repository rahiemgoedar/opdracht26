//function declaration
function squared1(nr1, nr2) {
    const squared1 = (nr1*nr1+nr2*nr2);
    return squared1*squared1;
}

const result1 = squared1(2, 3);
console.log(result1);

//function expression
const squared2 = function (nr1, nr2) {
    const squared2 = nr1*nr1+nr2*nr2;
    return squared2*squared2
};

const result2 = squared2(2, 3);
console.log(result2);

//arrow functions
const squared3 = (nr1, nr2) => {
    const sum3 = nr1*nr1+nr2*nr2;
    return sum3*sum3;
};

const result3 = squared3(2, 3);
console.log(result3);


/* //hieronder het juiste antwoord:
function doSquareCalculation(number1, number2) {
    const number1Squared = number1 * number1;
    const number2Squared = number2 * number2;
    const sum = number1Squared + number2Squared;
    const sumSquared = sum * sum;
    return sumSquared;
}
doSquareCalculation(2,3);
console.log(doSquareCalculation);

const square = function(number) {
    return number * number;
};

const doSquareCalculation = function(number1, number2) {
    return square(square(number1) + square(number2));
};

//arrow
const doSquareCalculation = (number1, number2) => {
    const number1Squared = number1 * number1;
    const number2Squared = number2 * number2;
    const sum = number1Squared + number2Squared;
    const sumSquared = sum * sum;
    return sumSquared;
};

//arrow shorter
const doSquareCalculation = (number1, number2) => {
    const sum = number1 * number1 + number2 * number2;
    return sum * sum;
}; */