// Person class
class Person {
    constructor(name, age, gender, nationality) {
      this.name = name;
      this.age = age;
      this.gender = gender;
      this.nationality = nationality;
    }
  
    // introduce method
    introduce() {
      return `My name is ${this.name}, I am ${this.age} years old, I am ${this.gender}, and I am ${this.nationality}.`;
    }
  }
  
  // Create three instances of the Person class
  const person1 = new Person("John", 25, "male", "American");
  const person2 = new Person("Jane", 30, "female", "Canadian");
  const person3 = new Person("Bob", 20, "male", "Australian");
  
  // Call the introduce method on each instance and print the returned string to the console
  console.log("Person instance 1:", person1.introduce());
  console.log("Person instance 2:", person2.introduce());
  console.log("Person instance 3:", person3.introduce());
  
  // Student class inherits from Person class
  class Student extends Person {
    constructor(name, age, gender, nationality, subject) {
      super(name, age, gender, nationality);
      this.subject = subject;
    }
  
    // study method
    study() {
      return `I am studying ${this.subject}.`;
    }
  }
  
  // Create an instance of the Student class
  const student1 = new Student("Sarah", 18, "female", "British", "Computer Science");
  
  // Call the introduce method on the Student instance and print the returned string to the console
  console.log("Student instance 1:", student1.introduce());
  
  // Call the study method on the Student instance and print the returned string to the console
  console.log("Student instance 1:", student1.study());
  