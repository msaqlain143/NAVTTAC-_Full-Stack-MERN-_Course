//objects
//optimizing process step # 1  (when multiple user issue occurs)
// let user = {
//   fname: "alex",
//   age: 21,
//   city: "gilgit",
//   status: "active",
//   profile: function () {
//     console.log("hello" + this.fname);
//   },
// };

//optimizing process step # 2  (unsecure functions)
// function profile() {
//   console.log("hello" + this.fname);
// }
// let users = {
//   fname: "alex",
//   age: 21,
//   city: "gilgit",
//   status: "active",
//   profile: profile,
// };

//optimizing process step # 3

// var userMrthods = {
//   profile: function () {
//     console.log("hello" + this.fname);
//   },
//   changeName: function (newname) {
//     this.fname = newname;
//   },
//   changeAge: function (newAge) {
//     this.fname = newAge;
//   },
// };

// let usersP = {
//   fname: "alex",
//   age: 21,
//   city: "gilgit",
//   status: "active",
//   profile: userMrthods.profile,
// };

//optimizing process step # 4

// let usrs = [];
// function createUser(fullname, email, age, city) {
//step 1 (data store)
//   let usr = {};
//step 2
//   usr.fname = fullname;
//   usr.email = email;
//   usr.age = age;
//   usr.city = city;

//step 3
//usrs.push(usr);

//step4
//   return "Users Created Successfully!!!";
// }

//let usr1 = createUser("ali", "ali@gmail.com", 21, "Gilgit");
// console.log(usr1);
//let usr2 = createUser("muhammad", "mhd@gmail.com", 25, "Nagr");
//console.log(usrs);

//alternate method to create empty object
// const user = Object.create();

// let ul = {
//   key1: "value 1",
//   key2: "value 2",
// };
// let ul1 = {
//   key3: "value 1",
// };

// let u2 = Object.create(u1);
// u2.key3 = "value 3";
// console.log(u2);

// let a = 'ali'
// let b = new String('ali');

// console.log(b);
// console.log(b..)

// const user = {
//     fname:'ali'
// }

// const user.__proto__ = useRef();
var userMrthods = {
  profile: function () {
    console.log("hello" + this.fname);
  },
  changeName: function (newname) {
    this.fname = newname;
  },
  changeAge: function (newAge) {
    this.fname = newAge;
  },
};

function registerUser(fname, email, password) {
  const user = Object.create(userMrthods);
  user.fname = fname;
  user.email = email;
  user.password = password;

  return user;
}

let show = registerUser("ali", "ali@gmail.com", "123456");
console.log("User Registered Successfully !! " + show.profile());
