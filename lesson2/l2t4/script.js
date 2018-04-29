// 4. (*) Implement a function with two string arguments, which returns true if the given strings are anagrams, and
// false otherwise. Anagrams are the strings, which consist of the same symbols, but perhaps in a different
// order. For example ‘melon’ and ‘lemon’ are anagrams, but ‘ball’ and ‘lab’ - no, because they have different
// amounts of letter ‘l’.

function ifAnagrams(string1, string2) {
    var arr1 = string1.split("");
    var arr2 = string2.split("");

    arr1.sort();
    arr2.sort();

    var areAnagrams = true;
    if (arr1.length != arr2.length) {
        areAnagrams = false;
    }
    //if the lengths of both arrays are equal
    else {
        for (var arrayIter in arr1) {
            if ((areAnagrams === true) && (arr1[arrayIter] != arr2[arrayIter])) {
                areAnagrams = false;
                break;
            }
        }
    }
    console.log("- Are " + string1 + " and " + string2 + " anagrams?\n- " + areAnagrams);
}
[{str1: "melon",str2: "lemon"},{str1:"abc",str2:"cbad"}].forEach(
    function(item) {
        ifAnagrams(item["str1"], item["str2"])
    }
)

