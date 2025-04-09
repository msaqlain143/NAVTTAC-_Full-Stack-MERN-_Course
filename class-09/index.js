// var fname = "Saqlain";

// console.log(fname);

// let age = 21;
// function hello(country, city) {
//   var address = city + country;
//   console.log(address);
//   return address;
// }

// const data = hello("PAKISTAN", +"GILGIT");
// console.log(data);

// var a = [1, 2, 3, 4, 5, 6, 7, 8];
// var b = [...a];

// a[0] = "saqlain";
// console.log(a);
// console.log(b);

// var user = {
//   age: 21,
//   name: "alex",
// };
// var about = {
//   address: "NAgar Gilgit",
// };

// var userData = {
//   ...user,
//   ...about,
// };

// console.log(userData);

const user = {
  fname: "alex",
  age: 21,
  city: "Gilgit",
  profile: function (time) {
    console.log(
      "GOOD " +
        time +
        " my name is " +
        this.fname +
        " and i am from " +
        this.city
    );
    //console.log(this);
  },
};
user.profile("Morning");

//console.log(this);
