// Find roots of quadratic equation with the given coefficients a, b, c. Log on console roots or some message, if
// there are no roots.


var a = 1;
var b = 2;
var c = -2;


if (dCalc(a, b, c) != null) {

    var D = dCalc(a, b, c);
    rootsCalc(D, a, b, c);

}
else console.log("incorrect data type provided in the input");


function dCalc(a, b, c) {

    if ((typeof a === "number") && (typeof b === "number") && (typeof c === "number")) {
        // return D = b*b - 4*a*c;
        return b * b - 4 * a * c;
    }
    else {
        return null;
    }
}

function rootsCalc(D, a, b, c) {
    if (D !== 0) {
        if (D > 0) {
            var x1 = (-b + D ^ 0.5) / (2 * a);
            var x2 = (-b - D ^ 0.5) / (2 * a);
            console.log("2 roots found:\n " + "x1 = " + x1 + "\n" + "x2 = " + x2 + "\n");
        }
        else {
            console.log("no root existing");
        }
    }
    else {
        x1 = (-b + D ^ 0.5) / (2 * a);
        console.log("one root found:" + "x=" + x1 + "\n");
    }

}
