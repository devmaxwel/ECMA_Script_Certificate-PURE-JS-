// classes are not hoisted
// They cannot be invoked before declarations
//Classes are syntactical sugar to javascript OOP

// OOP using classes
class Person {
  constructor(age, name, position) {
    this.age = age;
    this.name = name;
    this.position = position;
  }
  // Class methods
  greeetings = () => {
    console.log(
      "Hi " + this.name + " Happy to have you as our " + this.position
    );
  };
}
const bill = new Person(22, "Maxwel", "Junior Dev");
bill.greeetings();

 function printsA(){
     console.log(Answer);
     const Answer = 1;
 }
 printsA();
 printsA();