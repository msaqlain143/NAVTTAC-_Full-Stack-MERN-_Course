//classes

class Animal {
  constructor(name, age, color) {
    this.name = name;
    this.age = age;
    this.color = color;
  }

  cat() {
    console.log("Eating ......");
  }
}
class Dog extends Animal {
  constructor(price, name, age, color) {
    super(name, age, color);
    this.price = price;
  }
}

class Cat extends Animal {
  constructor(name, age, color, sound) {
    super(name, age, color);
    this.sound = sound;
  }
}

const d1 = new Dog(20000, "entertaintment", 1.2, "red");
console.log(d1);
const c1 = new Cat("joh", 1.2, "red", "meoowo");
console.log(c1);

// const al = new Animal("dog", 2, "white");
// const a2 = new Animal("CAt", 2, "white");
// console.log(al, a2);
// a2.cat();

class Bank {
  balance = 0;
  constructor(accName, accId, accType) {
    this.accName = accName;
    this.accId = accId;
    this.accType = accType;
  }

  deposit(amount, role) {
    if (role == "admin") {
      this.balance += amount;
      console.log(`Deposit ${amount} successfully !`);
    } else {
      console.log("You Can`t Deposit !!");
    }
  }
}

const acc1 = new Bank("ali", 123, "saving");
acc1.deposit(10000, "admin");
// console.log(acc1);

//Math
// console.log(Math);
//abs

var a = -2;
var b = Math.abs(a);
console.log(b);

//MATH.random
console.log(Math.floor(Math.random() * 6 + 1));

//MAth.floor
console.log(Math.floor(12.14));

console.log(Math.ceil(12.14));

//math.pow

console.log(Math.pow(3, 4));

console.log(Math.min(1, 23, 2, 54, 78, 2, 11, 65, 22));

//Date

// const today = new Date();
// console.log(today);

//mini project

const dob = new Date(2000, 17, 02, 0, 0, 0, 0);

const today = new Date();

function calculationAge(dob) {
  const age = today.getFullYear() - dob.getFullYear();
  const month = today.getMonth() - bod.getMonth();
  if (month) {
    return age - 1;
  }
  return age;
}
const res = calculationAge(dob);
console.log(res);

//clousers

function OuterFun() {
  const counter = 0;
  return function innerFun() {
    console.log(counter++);
  };
}

const f = OuterFun();

f();
