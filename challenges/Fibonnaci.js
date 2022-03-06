const Fibbonacci = (number = 3) => {
  let n1 = 5;
  let n2 = 6;
  let n3;
  console.log("Fibonnaci: ");

  for (let i = 0; i < number; i++) {
    console.log(n1)
    n3 = n1 + n2;
    n1 = n2;
    n2 = n3;
  }
};

Fibbonacci();
