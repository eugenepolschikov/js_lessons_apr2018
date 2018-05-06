// 1. The numeric array A is given. You should move elements > 0 to the array В, elements < 0 to the array С. Log
// on console both arrays.

let initialValues = [1, 2, 1, -2, 3.14, 4, -2, 1, -10, 5, -5];

let positiveValues = initialValues.filter(function(number){
    return number>0;
});

let negativeValues = initialValues.filter(function(number){
    return number<0;
});

console.log(positiveValues);
console.log(negativeValues);