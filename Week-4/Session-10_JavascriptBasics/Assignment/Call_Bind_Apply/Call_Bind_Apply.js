// Calculator class
class Calculator {
    // Method to add two numbers
    add(a, b) {
      return a + b;
    }
  
    // Method to subtract two numbers
    subtract(a, b) {
      return a - b;
    }
  
    // Method to multiply two numbers
    multiply(a, b) {
      return a * b;
    }
  
    // Method to divide two numbers
    divide(a, b) {
      if (b !== 0) {
        return a / b;
      } else {
        throw new Error("Cannot divide by zero");
      }
    }
  }
  
  // ScientificCalculator class extending Calculator
  class ScientificCalculator extends Calculator {
    // Method to calculate the square of a number
    square(a) {
      return a * a;
    }
  
    // Method to calculate the cube of a number
    cube(a) {
      return a * a * a;
    }
  
    // Method to calculate the power of a number
    power(a, b) {
      return Math.pow(b, a);
    }
  }
  
  // Create an instance of ScientificCalculator
  const calculator = new ScientificCalculator();
  
  // Using the "call" method, invoke the "add" method of the Calculator class with arguments 10 and 5
  const sum = Calculator.prototype.add.call(calculator, 10, 5);
  console.log("Sum:", sum); // Output: Sum: 15
  
  // Using the "apply" method, invoke the "subtract" method of the Calculator class with arguments 10 and 5
  const difference = Calculator.prototype.subtract.apply(calculator, [10, 5]);
  console.log("Difference:", difference); // Output: Difference: 5
  
  // Using the "bind" method, create a new method named "multiplyByTwo" that multiplies a number by 2 and returns the result
  const multiplyByTwo = Calculator.prototype.multiply.bind(calculator, 2);
  console.log("Multiply by Two:", multiplyByTwo(5)); // Output: Multiply by Two: 10
  
  // Using the "bind" method, create a new method named "powerOfThree" that raises a number to the power of 3 and returns the result
  const powerOfThree = ScientificCalculator.prototype.power.bind(calculator, 3);
  console.log("Power of Three:", powerOfThree(2)); // Output: Power of Three: 8
  