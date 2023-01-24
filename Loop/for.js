var noAngkot = 1;
var angkotBeroperasi = 6;
var jmlAngkot = 10;

while (noAngkot <= angkotBeroperasi) {
    console.log("Angkot No " + noAngkot + " Beroperasi dengan baik")
    noAngkot++
}

for ( noAngkot = angkotBeroperasi + 1; noAngkot <= jmlAngkot; noAngkot++){
    console.log("Angkot no " + noAngkot + " Tidak beroperasi dengan baik");
}