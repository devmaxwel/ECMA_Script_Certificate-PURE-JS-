// Arrays
// Collection of data or objects

const myArray = ["Maxwel", 1, 2, 5, 3, 0.5, true, null];
console.log(myArray);

const namesArray = new Array();
namesArray[0] = 100;
namesArray[1] = "Maxwel";
console.log(namesArray);

namesArray.push("Ochieng", 200);
console.log(namesArray);

const arrays = ["maxwel", "jenni", "dev", [0, 45, "MERN"]];
console.log(arrays[3][2]);

function getLeapYear(year = 2000) {
  if (year % 4 === 0) {
    console.log("leap Year");
    if (year % 100 === 0) {
      console.log("Not leap year");
      if (year % 400 === 0) {
        console.log("Leap Year");
      }
    } else {
      console.log("Not leap year");
    }
  } else {
    console.log("its not a leap year");
  }
}

getLeapYear();

var names = [3,8,0,5,9,1]
// You can specify sort criteria for integers unlike strings
var sortedNames = names.sort((a,b) => {
  return b-a
});

console.log(sortedNames)


var names1 = ["Maxwel", "Okeyo", "Jenni", "Aaron"]

// Sorts in Alphabetical order for strings 
var sortedNames1 = names1.sort();
// 
console.log(sortedNames1.reverse());

var token = "cghjkl678"
const bearer = "Bearer " + token
// splits takes sepatates two arrays
const splitedArray = bearer.split(" ")[1]
console.log(splitedArray);

const slicedArray= names.slice(1,3)
console.log(slicedArray)
// At index 3 remove one item and replace it with the string 
const splicedArray = names1.splice(3,1,'Justus');
// At index 3 add one item as string 
const splicedArray1 = names1.splice(3,0,"David");
console.log(splicedArray);
console.log(names1);
const poppedArray = names1.pop();
console.log(poppedArray);