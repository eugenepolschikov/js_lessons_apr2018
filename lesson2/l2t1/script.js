// 1. The numeric array A is given. You should move elements > 0 to the array В, elements < 0 to the array С. Log
// on console both arrays.

var initialVals = [1, -1, 2, -2, -3];
var positiveVals = [];
var negativeVals = [];

for (var iter in initialVals) {

    if (initialVals[iter] > 0) {
        positiveVals.push(initialVals[iter]);
    }
    else {
        negativeVals.push(initialVals[iter]);
    }
}

console.log("input array: " + initialVals);
console.log("positiveVals values array: " + positiveVals);
console.log("negativeVals values array: " + negativeVals);

// option 2

var arr = [1, -1, 2, -2, 3];
var option2positiveArr = arr.filter(function(number) {
    return number > 0;
});
var option2NegativeArr = arr.filter(function(number) {
    return number < 0;
});
console.log("positiveVals values array: " + option2positiveArr );
console.log("negativeVals values array: " + option2NegativeArr );