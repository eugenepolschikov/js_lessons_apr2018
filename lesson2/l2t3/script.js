// 3. Algorithms for tasks 1 and 2 implement as functions with one argument. Run both function with the same
// array in one script.js file.

var initialVals = [1, 2, 1, -2, 3.14, 4, -2, 1, -10, 5, -5];

var positiveVals = initialVals.filter(function (number) {
    return number > 0;
});
var negativeVals = initialVals.filter(function (number) {
    return number < 0;
});
console.log("Initial array: " + initialVals);
console.log("Positive array: " + positiveVals);
console.log("Negative array: " + negativeVals);

var distinct = {};
initialVals.forEach(function (num) {
    if (distinct[num] != null)
        distinct[num] += 1;
    else
        distinct[num] = 1;
});


for (var key in distinct)
    console.log('Number ' + key + ' repeats ' + distinct[key] + ' time(s) \n');
