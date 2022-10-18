let a;
let b;
let c;

function myFn() {
    let b;
    let c = 7;
    a = true;
    b = 10;
    // console.log(b);
    // return b;
}

myFn();
myFn();
myFn();

console.log(a);
console.log(b)
console.log(c)


// const ab = 5;
//
// function myFn1() {
//     function innerFn() {
//         console.log(ab);
//     }
//     innerFn();
// }
//
// myFn1();
