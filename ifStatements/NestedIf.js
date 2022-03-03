// Nested ifs
// The second code depends on the truthy of the first

const bankBalance = 25000;
const itemCost = 23000;
const tax = 1200;

if (bankBalance >= itemCost) {
  console.log("Check VAT");
  if (bankBalance >= itemCost + tax) {
    console.log("Proceed and Buy");
  } else {
    console.log("Your balance is low");
  }
}
