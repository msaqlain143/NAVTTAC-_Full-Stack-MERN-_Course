// const methods = {
//   getName: function () {
//     return this.getName;
//   },
// };
// function createUser(fname, email, age) {
//   //1
//   let user = Object.create(methods);
//   //2
//   user.fname = name;
//   user.email = email;
//   user.age = age;

//   //3
//   return user;
// }
// const user1 = createUser("ALi", "ali@gmail.com", 31);
// console.log(user1);

// function hello() {
//   console.log("hello");
// }

// // console.log(hello.name);

// hello.fname = "Muhammad";
// console.log(hello.fname);
// console.log(hello.prototype);

// function createUser(fname, email, age) {
//   //1
//   let user = Object.create(createUser.prototype); //{} + {}
//   //2
//   user.fname = name;
//   user.email = email;
//   user.age = age;
//   //{fname:"",email:"dgmial",age:}

//   return user;
// }

// createUser.prototype.getName = function () {
//   console.log(object);
// };
// createUser.prototype.updateName = function (updateName) {
//   this.updateName = name;
// };
// const u1 = createUser("ali", "email.com", 21);
// console.log(u1);

//OOP
//Class

// class User {
//   constructor(fname, email, age) {
//     this.fname = fname;
//     this.email = email;
//     this.age = age;
//   }
//   getName() {
//     console.log(this.fname);
//   }
// }
// const user1 = new User("alex", "ali@gmail.com", 21);
// console.log(user1);


//push ,pop , shift ,unshift

const arr = [1, 2, 3, 4, 5]
arr.pop();
arr.push(2)

arr.shift()  //del element at first index
arr.unshift()  //use to add the element at first index


//slice
console.log(arr.slice(0, 3);) 