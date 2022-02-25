// Collection of name valu pairs
// 1 is the key and maxwel is the value
// Three ways of declaring an object and assigning values to it

// First one 
var myName = {1:"Maxwel"}
// Seocnd one 
var myObject  = new Object()
// Third one 
var newObj = {}

// How to append data to the first and second one 
newObj['2'] = "Ochieng";

console.log(myObject)

var myNewObject = {
    1:"Cindy",
    firstName:"Jeniffer",
};

myNewObject['lastName'] = "Kosencha";
console.log(myNewObject);
console.log((myNewObject.firstName));

// Accessing a parent's child when a key is an integer
console.log(myNewObject[1]);

var myNewObject1 = {
    1:"Cindy",
    firstName:"Jeniffer",
    numbers:{
        home: "0710567845",
        cellphone:"555-555-865"
    }
};
myNewObject1.numbers['landline'] = "555-856-789";

console.log(myNewObject1);

var donut ={
    type:"coconut",
    glazed:true,
    sweetness:9/10,
    hasChocalate:false,
    Info:function(){
        console.log("Sweetnes Lebvel: " + this.sweetness)
    }
}

donut.Info();

// What if we wanted to have more donuts then we would habe the Object oriented way

// Constructor
// ES6 way
class donutConstructor{
    constructor(type, glazed, sweetness, hasChocalate) {
        this.Type = type;
        this.Glazed = glazed;
        this.Sweetness = sweetness;
        this.Haschocolate = hasChocalate;
        this.sayType = function () {
            console.log("Type: " + this.Type);
        };
        this.saySweetnes = function () {
            console.log("Sweetness Level: " + this.Sweetness);
        };
    }
}

var coconutDonut = new donutConstructor("donut", true,8,false)

// console.log(coconutDonut)
// Appending a field inside coconutDonut
coconutDonut.tasteGood = true
console.log(coconutDonut);
coconutDonut.sayType();
coconutDonut.saySweetnes();