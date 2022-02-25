// var Used inside of scope 

function sayName() {
  var shouldSayHi = true;
  if (shouldSayHi) {
    var name = "Maxwel";
    console.log("Hi " + name);
  }
}

sayName();

// var Used out of scope 
function sayName1() {
  var shouldSayHi = true;
  if (shouldSayHi) {
    var name = "Ochieng";
  }
  console.log("Hi " + name);
}
sayName1();

// LET 

// This will work as let is blocked scope
function blockScope(){
    var shouldSayHi = true;
    if(shouldSayHi){
        let name = "Okeyo"
        console.log("Hi there " +name)
    }

}

blockScope();

// This will not work as let is blocked scope
// Expct an error name is not defined
function blockScope1(){
    var shouldSayHi = true;
    if(shouldSayHi){
        let name = "Okeyo Maxwel"
       
    }
    console.log("Hi there " +name)
}

blockScope1();

// Example 2

function LET(){
    let shouldSayHi = false;
    let name;

    if(shouldSayHi){
        name = "Jenni"
        console.log("Your Name is: " + name)
    }else{
        name = "Gorgezz"
        console.log("Your name is: " +name )
    }

}

LET();

// Const are used with variables that cannever be re-assigned
// This will cause an error as you cannot override a const value
const myArray = [1,2,3]
// myArray = [3,3,6,7]
console.log(myArray)

// But you can add value to it also known as Mutate the original data
myArray.push(4)
console.log(myArray)

// Const is also block scoped 
// This will cause an error
// An error name is not defined
const sayHi =() =>{
    const sayHello = true

    if(sayHello){
        const name = "pappi"
    }
    console.log(name)
}

sayHi();