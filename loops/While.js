// While and do loops

let num = 10;

while (num <= 20) {
  console.log(num);
  console.log("Hello Maxwel");
  num++;
}

let c = 0;
let b = 0;

while (c <= 8) {
  c++;
  b = b + c;
  console.log(b);
}

const names = ["Maxwel", "Jenni", "Justus", "George"];

const namesLooper = (arr, userName) => {
  let index = 0;
  while (index < arr.length) {
    if (arr[index] === userName) {
        console.log(arr[index])
      break;
    }
    index++;
  }
};

namesLooper(names, "George");
