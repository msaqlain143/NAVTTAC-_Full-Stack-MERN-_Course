// Non premitive /reference datatypes ->stores large amount of Data

//arrays
var fruits = ["apple", 21, true, 23n, [1, 2, 3, 4]];
console.log(fruits);

//objects
var user = {
  name: "Muhammad Saqlain",
  age: 21,
  city: "Gilgit",
  country: "Pakistan",
};

console.log(user);

var users = [
  {
    name: "Muhammad",
    age: 21,
    city: "Gilgit",
    country: "Pakistan",
  },
  {
    name: "Saqlain",
    age: 23,
    city: "Nagar",
    country: "Pakistan",
  },
];
console.log(users);

var num = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(num);
console.log("Length is : ", num.length);

var greater_no = num[3] + 996;
console.log(
  "Data Tpe is : ",
  typeof greater_no,
  " and greater number is :",
  greater_no
);

var product = {
  id: 311334,
  pname: "Shoes",
  price: 2100,
  discount: 10,
  city: "Gilgit",
};
var pdetails = product.pname;
console.log(pdetails);

var arr = ["a", "b", "c", "d"];
console.log(arr);
console.log(arr[0]);
arr[0] = "Changed";

console.log(arr);
console.log(arr[0]);
