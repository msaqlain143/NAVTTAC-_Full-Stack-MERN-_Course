console.log("hello MERN ....");
// number
let a = 12.08;
let b = 5.876;
c = a + b;
console.log(`Addition of ${a} and ${b} is = ` + c);
console.log(typeof c);

//string
let M = "Muhammad";
let N = "Saqlain";
O = M + " " + N;
console.log(`Addition of ${M} and ${N} is = ` + typeof O);
console.log(typeof O);
var age = 20;

//boolean
var is18 = false;

//null
var address = null;
console.log(typeof address);

//symbol
var id = Symbol("asdfjkl");
var id1 = Symbol("asdfjkl");

console.log(id == id1);

//BigInt
console.log(Number.MAX_SAFE_INTEGER);

//var num = 983873736652525536373n;
var num = BigInt(983873736652525536373);
console.log(typeof num);

var e = 10;
var f = e;
console.log(e, f);
e = 100;
f = 1000;
console.log(e, f);
