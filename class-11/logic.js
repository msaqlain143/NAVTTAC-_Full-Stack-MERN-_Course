//ternary operator
var age = 1;

// if (age > 18) {
//   console.log("okay");
// } else {
//   console.log("Not Allowed");
// }

//age > 18 ? console.log("okay") : console.log("not okay");

// var check = age > 18 ? "okay" : "not okay";
// console.log(check);

// //template literals
// var fname = "alex";
// var age = 23;
// // console.log("my name is " + fname + " and my age is " + age);
// var about = `My name is ${fname}  And My age is ${age}`;
// console.log(about);

// //switch case statement

// var day = 5;
// switch (day) {
//   case 1:
//     console.log("Mon");
//     break;
//   case 2:
//     console.log("Tue");
//     break;
//   case 3:
//     console.log("Wed");
//     break;
//   case 4:
//     console.log("Thu");
//     break;
//   case 5:
//     console.log("Fri");
//     break;
//   case 6:
//     console.log("Sat");
//     break;
//   case 7:
//     console.log("Sun");
//     break;
//   default:
//     break;
// }

// console.log("Reminder of the given Two Nos is " + (12 % 4));

// console.log("Power of the given Two Nos is " + 12 ** 4);

// //loops
// for (let i = 0; i < 10; i += 2) {
//   console.log(i);
// }

// //while loop
// let i = ;
// while (i < 20) {
//   console.log(i);
//   i += 3;
// }

// do {
//   console.log(i);
// } while (i < 30);
// let tabof = Number(prompt("Enter Your Number :"));
// var i = 0;
// while (i < 10) {
//   console.log(`table of ${tabof} x ${i} is = ${tabof * i}`);
//   i++;
// }

// for (let i = 0; i < 5; i++) {
//   for (let j = 5; i <= 10; i++) {
//     console.log(j, i);
//   }
// }

// let arr = ["apple", "mango", "banana"];
// for (let i = 0; i < arr.length; i++) {
//   const element = arr[i];
//   console.log(element);
// }

// let arr1 = "Muhammad Saqlain";
// for (let i = 0; i < arr1.length; i++) {
//   const element = arr1[i];
//   console.log(element);
// }

// //for-of loop
// let fruits = ["apple", "mango", "banana"];

// for (const fruit of fruits) {
//   console.log(fruit);
// }

////for-in loop
// for (const i in fruits) {
//   console.log(i, fruits[i]);
// }

function sum(a) {
  a();
}
var res = sum(function () {
  console.log("Inner Function");
});

//tyoe2
function HOF(a) {
  return a;
}
var res = HOF(function () {
  console.log("i am returning inner function ");
});
res();
