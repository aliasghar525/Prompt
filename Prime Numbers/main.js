var a = prompt("Starting value")
var b = prompt("Ending value")


for (var a; a <= b; a++) {

    var prime = false;
    for (var i = 2; i <= a; i++) {
        if (a % i === 0 && i !== a) {
            prime = true;
        }
    }
    if (prime === false) {
        document.write(a + "<br>");
    }
}








