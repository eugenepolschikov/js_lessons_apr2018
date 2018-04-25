// Check whether a given number is prime. Log on console true or false.


var input_number = 6;
var sum = 1;


if (typeof input_number === "number") {
    for (var i = 2; i <= input_number/2; i++) {
        if (input_number % i === 0) {
            sum = sum + i;
        }

    }


    console.log(sum === input_number);

}
else {
    console.log("incorrect data type entered, please enter the number!");
}