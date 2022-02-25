var myName = "Maxwel"

console.log(myName)

var myName1 = "Ochieng"

// Var is functional scoped
// a variable declared with var is defined throughout the program as compared to let.
function sayName(){
    myName1 = "Okeyo"
    console.log(myName1)
}

sayName();