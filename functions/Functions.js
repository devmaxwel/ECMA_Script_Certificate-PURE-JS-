// Functions
// Functions without parameters
function sayHi() {
  console.log("Hi, Maxwel");
}

sayHi();
// Functions With Parameters
function sayHello(userName) {
  console.log("hello, " + userName);
}
// Hillary is the parameter that replaces the username of type any
sayHello("Hillary");

// Function with return Value
function numberDoubler(num) {
  const doubleValue = num * 2;
  return console.log(doubleValue);
}

numberDoubler(10);

// Annonymous Functions

const sayHello1 = function (hello) {
  console.log("Hello, " + hello);
};

sayHello1("Ochieng");
