// Having functions with functions that are return and execute the what was intended by the original function
// Closure

const squareAndMultiply = (num1, num2) => {
  // Closure
  function squarer(x) {
    return x * x;
  }
  //   returns the second requirement of the main function
  return squarer(num1) * squarer(num2);
};

console.log(squareAndMultiply(2, 4));

// Example 2

const personForatter = (name1, name2, age) => {
  function nameFormarter(arg1, arg2) {
    return arg1 + " " + arg2;
  }

  function dataFormater(fullname, age) {
    const data = {
      name: fullname,
      age: age,
    };
    return data;
  }

  const legalNames = nameFormarter(name1, name2);

  return dataFormater(legalNames, age);
};

console.log(personForatter("Maxwel", "Ochieng", 22));
