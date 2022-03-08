const myFruit = "Apple";

// parameters takes whatever we are evaluating

switch (myFruit) {
  case "Apple":
    console.log("Awesome I love Apple");
    break;
  case "Mangoe":
    console.log("Awesome I love Mangoe");
    break;
  default:
}

const FruiltLogger = (fruit) => {
  switch (fruit) {
    case "Apple":
      console.log("Apple is sweet");
      break;
    case "Mangoe":
      console.log("Mangoes disgust");
  }
};

FruiltLogger("Mangoe");

// ES6

const donutPicker = (flavor) => {
  switch (flavor) {
    case "s":
      return "Sprinklers";
    case "d":
      return "Dongoles";
    case "r":
      return "Redflags";
    default:
      "Not matching";
  }
};

const donuts=(selection)=>{
    const selected = donutPicker(selection)
    console.log('You have selected ' +selected)
}

donuts('s');