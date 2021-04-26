//function declaration
function squared1(nr1, nr2) {
    squared1 = ((nr1*nr1+nr2*nr2)*2);
    return;
}
squared1(2, 3);
console.log(squared1);

//function expression
const squared2 = function (nr1, nr2) {
return ((nr1*nr1+nr2*nr2)*2);
};
squared2(2, 3);
console.log(squared2);

//arrow functions
const squared3 = (nr1, nr2) => (nr1*nr1+nr2*nr2*2);
squared3 (2, 3);
console.log(squared3);