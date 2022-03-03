// Logical Operators and Elseif

const bankBalance = 25000;
const itemCost = 23000;
const tax = 1200;


if(bankBalance >=2300 && tax<=1500){
    console.log("Can Buy")
}
else {
    console.log("Cannot Buy")
}

if(bankBalance >= itemCost){
    console.log("Proceed")
}else if(tax <= 1100){
    console.log("Your Account is low")
}else{
    console.log("Can buy")
}
