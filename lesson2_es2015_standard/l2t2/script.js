// 2. The numeric array is given. You should find amount of reps for each element in the array and log it on
// console. For example: for the array [ 1, 2, 1, 2, 3.14, 4, 2, 1] you should log:
//     1 - 3, 2 - 3, 3.14 - 1, 4 - 1 (not necessary in this order)

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