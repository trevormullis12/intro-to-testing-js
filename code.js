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