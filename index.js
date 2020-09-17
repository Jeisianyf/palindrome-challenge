var array = new Array();

var objElemnt = {}

function randomString(lenMax) {
    var string = '';

    do {
        string += Math.random().toString(16).substring(2);
    } while (string.length < lenMax) {
        string = string.substring(0, lenMax);
        return string;
    }
}

for (var i = 0; i < 10000; i++) {
    array[i] = randomString(5);
}

function lookPalindrome(objString) {
    var reversed = objString.split("").reverse().join("");
    return reversed === objString;

}

function result() {
    const booleanResult = array.map(lookPalindrome);
    return booleanResult;
}

console.log(result());