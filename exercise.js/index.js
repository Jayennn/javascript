var a = 1;
var b = 10;

while (a <= 10 ) {
    if (a % 2 == 1 && a !== 1) {
        console.log("ganjil " + a);
    } else if( a === 1) {
        console.log("berhasil " + a);
    } else {
        console.log("genap " + a);
    }
    a++
}