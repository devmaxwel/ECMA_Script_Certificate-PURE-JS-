// Strictly comapare operator and compare opeator
// == and ===

const numberFive = 5;
const stringFive = "5"

// This one Will console false because they are not of same type becasue its Stricly comapres(check types)
console.log(numberFive === stringFive);

// this one will console true because its checking the values and not the type
console.log(numberFive == stringFive);

const stringConversion = parseInt(stringFive)
// Compare the addition of both string and numbers
console.log(numberFive+stringFive)
console.log(stringConversion + numberFive);

if(numberFive === stringFive){
    console.log("Hello Maxwe");
}else{
    console.log("Hello Ochieng");
}