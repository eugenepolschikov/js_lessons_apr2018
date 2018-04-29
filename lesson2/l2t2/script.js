// 2. The numeric array is given. You should find amount of reps for each element in the array and log it on
// console. For example: for the array [ 1, 2, 1, 2, 3.14, 4, 2, 1] you should log:
//     1 - 3, 2 - 3, 3.14 - 1, 4 - 1 (not necessary in this order)

var initialArr = [1, 2, 1, 2, 3.14, 4, 2, 1];
// var initialArr = [1, 1, 1 , 1 ,1];
var distinctArr = [];

for (var initialIter in initialArr){

    if(initialIter===0){
        distinctArr.push({"number":initialArr[initialIter],"count":1})
        continue;
    }

    var existsInDistinct = false;
    for (var distinctIter in distinctArr){
        if (initialArr[initialIter] === distinctArr[distinctIter]["number"]) {
            distinctArr[distinctIter]["count"] +=  1 ;
            existsInDistinct = true;
        }
    }
    if (existsInDistinct === false){

        distinctArr.push ({"number":initialArr[initialIter],"count":1});
    }
}

console.log("initialArr arr ["+initialArr+"] \n");

for (var distinctIter in distinctArr){

    console.log ("num "+distinctArr[distinctIter]["number"]+" repeats "+distinctArr[distinctIter]["count"]+" time(s)\n");
}