const FiizBuzz = () => {
  const array = [];

  function random_item(items) {
    return items[Math.floor(Math.random() * items.length)];
  }

  var numbers = [3, 15, 5, 20];
  array.push(random_item(numbers));
  console.log(array);

  if (array % 3 === 0) {
    console.log("Fizz");

    if (array % 3 === 0 && array % 5 === 0) {
        console.log("FizzBuzz")
    }else{
        console.log("Buzz")
    }
  }
};

FiizBuzz();
