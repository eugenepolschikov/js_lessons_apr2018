// 3. Algorithms for tasks 1 and 2 implement as functions with one argument. Run both function with the same
// array in one script.js file.

let initialValues = [1, 2, 1, -2, 3.14, 4, -2, 1, -10, 5, -5];

let positiveValues = initialValues.filter(function(number){
    return number>0;
});

let negativeValues = initialValues.filter(function(number){
    return number<0;
});

console.log(positiveValues);
console.log(negativeValues);

//##########################
let initialArr = [1, 2, 1, 2, 3.14, 4, 2, 1];

let distinctVals = {};
initialArr.forEach(function(number){
    if(distinctVals[number]===undefined) {
        distinctVals[number] =  1;
    }
    else {
        distinctVals[number]  += 1;
    }
});

console.log(distinctVals);