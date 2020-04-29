// helloWorld function
function helloWorld() {
    return "Hello, World!";
}

function sayHello(v) {
    if(typeof v !== "string" || !isNaN(parseFloat(v)) || v === "")
        return "Hello, World!";
    else
        return "Hello, " + v + "!";
}

function isFive(v) {
    return v == 5;
}

function isEven(v) {
    if(v % 2 === 0)
    return true;
    else return false;
}

function isVowel(v) {
    var vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    if(typeof v == "string") {
        if (v.length == 1 && vowels.indexOf(v) != -1)
            return true;
    }
    return false;
}

function add(num1, num2) {
    if(isNaN(parseInt(num1)) || isNaN(parseInt(num2)))
        return NaN;
    else
        var one = parseInt(num1);
        var two = parseInt(num2);

        return (one + two);
}