// const user = {
//   name: "ali",
//   age: 32,
//   about: function () {
//     console.log(
//       "my name is " + this.name + " and I am " + this.age + " years old"
//     );
//   },
// };
// user.about();

function userProfile(date) {
  console.log(date, this.fname);
}

//userProfile();

const user = {
  fname: "ali",
  age: 32,
  country: "PAK",
  //profile: userProfile,
};

//userProfile.call(user, "17 Feb 2002");
// userProfile.apply(user, ["17 Feb 2002"]);
//userProfile.bind(user, "17 Feb 2002");
//user.profile();

//higher Order Functions
//type 1
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

//methods

// var fname = new String("Muhammad");
// console.log(fname);
//string methods
var lname = "Saqlain"; //new string() ->always return object
console.log(lname.toLocaleUpperCase());

console.log(lname.length);
console.log(lname[5]);

var trimName = lname.trim();
console.log(trimName, trimName.length);

var search = lname.includes("m");
console.log(search);

var slice = lname.slice(1, 4);
console.log(slice);

var splt = lname.split("-", 2);
console.log(splt);

var index = lname.indexOf("n");
console.log(index);

//if we want to find the methods of arrays
var methodsOfArray = new Array();
console.log(methodsOfArray);
