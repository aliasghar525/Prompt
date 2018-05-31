var a = prompt("Starting value")
var b = prompt("Ending value")


for (a; a <= b; a++) {
    var odd = false
    if (a % 2 === 0) {
        odd = true
    }
    if (odd === false) {
        document.write(a + "<br>")
    }
}