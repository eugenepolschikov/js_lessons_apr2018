// (*) Reverse a given number input_number (123 -> 321). Log the result on console.


// option A
var n = 123456789;
var number;
var reversed = 0;
var text_invalid_value = "The value you've provided is not a number.\nPlease provide correct value."

if (typeof n === "number") {
    number = n;
    while (n != 0) {
        reversed = reversed * 10;
        reversed = reversed + n % 10;
        n = n - n % 10;
        n = n / 10;
    }

    console.log("### OPTION A#### -> Reversed " + number + " is " + reversed + "\n\n");

}

else {
    console.log(text_invalid_value);
}


// option B with recursion


var foo = 123456789;
var bar = '' + foo;

function reverseString(str) {
    if (str === "")
        return "";
    else
        return reverseString(str.substr(1)) + str.charAt(0);
}

console.log("OPTION B: with recursion: "+reverseString(bar));

