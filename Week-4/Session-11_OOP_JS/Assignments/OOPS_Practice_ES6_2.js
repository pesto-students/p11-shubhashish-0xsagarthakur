//Polymorphism

// Creating a class called Shape
class Shape {
    calculateArea() {
      // To be overridden by subclasses
    }
  }
  
  // Creating a subclass called Rectangle that extends Shape
  class Rectangle extends Shape {
    constructor(width, height) {
      super();
      this.width = width;
      this.height = height;
    }
  
    calculateArea() {
      return this.width * this.height;
    }
  }
  
  // Creating a subclass called Triangle that extends Shape
  class Triangle extends Shape {
    constructor(base, height) {
      super();
      this.base = base;
      this.height = height;
    }
  
    calculateArea() {
      return (this.base * this.height) / 2;
    }
  }
  
  // Creating a subclass called Circle that extends Shape
  class Circle extends Shape {
    constructor(radius) {
      super();
      this.radius = radius;
    }
  
    calculateArea() {
      return Math.PI * this.radius * this.radius;
    }
  }
  
  // Creating instances of each subclass
  const rectangle = new Rectangle(5, 10);
  const triangle = new Triangle(3, 6);
  const circle = new Circle(4);
  
  // Calling the calculateArea() method on each instance and logging the result to the console
  console.log(rectangle.calculateArea());
  console.log(triangle.calculateArea());
  console.log(circle.calculateArea());
  