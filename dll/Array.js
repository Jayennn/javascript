const array = [
    'senin', 'selasa', 'rabu', 'kamis', 'jumat', 'sabtu', 'minggu'
]

// for (var i = 0; i < array.length; i++){
//     console.log("Hari Ke-" + (i + 1) + ' ' + array[i]);
// }

// 1. Join
// console.log(array.join(' - '));

// 2. Push & Pop
// array.push('kiamat') //Push
// array.pop() // Menghilangkan Obj terakhir


// 3. Shift & Unshift
// array.unshift('Kiamat') //Menaruh ke awal array
//array.shift() // Menghilangkan Obj awal

// Menghilangkan objek
// Shift & Pop

// 3. Slice & Splice
// Splice(indexAwal, mauDihapusBerapa, elemenbaru1, ...)
// array.splice(1, 0, 'kiamat')
// console.log(array2.join(' - '));

// Slice(awal, akhir) //Mengiris sebuah array menjadi array yang baru
// var array2 = array.slice(1,4)

// 4. Foreach & Map

// array.forEach((e, i) => {
//     console.log('Hari ' + (i + 1) + ' ' + 'adalah : ' + e);
// })

// Map mengembalikan nilai

// var array2 = array1.map((e) => {
    //     return e * 2
    // })
    
    //     console.log(array2);
    
    
// 5. sort 
var array1 = ['b', 'c', 'a']
    
    console.log(array1.sort());