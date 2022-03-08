// Arrow functions

const multiplier = (num1, num2) => {
  return console.log(num1 * num2);
};

multiplier(6, 8);

const users = [
  {
    name: "Maxwel",
    age: 20,
  },
  {
    name: "Jenni",
    age: 19,
  },
  {
    name: "Jane",
    age: 18,
  },
];

const mapName = (names) => {
  const mappedNames = names.map((user) => {
    return user.name;
  });

  return mappedNames;
};

// console.log(mapName(users));

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const filteredNumber = numbers.filter((n) => {
  return n % 2 === 0;
});

// console.log(filteredNumber);

const numberDoubler = (nums) => {
  const result = [];
  nums.forEach((n) => {
    return result.push(n * 2);
  });
  return result;
};

// console.log(numberDoubler(numbers));

// logs all the unwanted params
const logAllNumbers=(x, ...nums)=>{
   console.log(nums)
}

logAllNumbers(2,4,5,6,7);
