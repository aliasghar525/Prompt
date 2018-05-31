var a = prompt("Enter Any Value Of Table To Begin?")
var b = prompt("How Long Do You Need The Table?")
var arrays = []
document.write("&nbsp" + "<strong>" + "Table of " + a + "<br>" + "<br>" + "</strong>")
for (i = 0; i <= b; i++) {
    arrays = [i]
    document.write(a + " * " + arrays + " = " + a * arrays + "<br>")
}
