// Find the following calculation: S = 1 + 1/2 + 1/3 + 1/4 + … + 1/input_number for a given input_number. Log the result on console.


var input_num = 25;
var calculation = 0;

if (typeof input_num === "number") {
    for (var i = 1; i <= input_num; i++) {
        calculation = calculation + 1/i;
    }
    console.log("The calculation series: S = 1 + 1/2 + 1/3 + 1/4 + … + 1/input_num for the give num = "+input_num+" is "+calculation);
}

else {
    console.log("incorrect data type entered, please enter the number!");
}