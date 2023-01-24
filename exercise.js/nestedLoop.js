// var i;
// var j;
// var s = "";

// for (i = 1; i < 5; i++) {
//     for (j = 1; j <= i; j++) {
//         s += "* "
//     }
//     s += '\n'
// }
// for (i = 5; i >= 0; i--){
//     for (j = 1; j <= i; j++) {
//         s += "* "
//     }
//     s += '\n'
// }

// console.log(s);

//solved


// for (j = 5; j >= 1; j--) {
//     for (k = 1; k <= 5; k++) {
//         if (k >= j) {
//             a += '* '
//         } else {
//             a += "  "
//         }
//     }

//     for (l = 5; l > j; l-- ) {
//         a+='* '
//     }

//     a += '\n'


// }

let k;
let j;
let l;
let a = '';


for (j = 5; j >= 1; j--){
    // a+='* '
    for (k = 1; k <= j; k++){
        a+='* '
    }
    a += '\n'
}

console.log(a)

//solved


 