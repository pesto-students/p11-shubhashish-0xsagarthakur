// Create a function named "counter" that returns a function
function counter() {
    let count = 0; // Initialize count variable
  
    // Return a function that increases count by 1 and returns its value
    return function () {
      count++;
      return count;
    };
  }
  
  // Create two instances of the counter function
  const firstCounter = counter();
  const secondCounter = counter();
  
  // Call the firstCounter function five times and store the returned values in an array named "firstValues"
  const firstValues = [];
  for (let i = 0; i < 5; i++) {
    firstValues.push(firstCounter());
  }
  
  // Call the secondCounter function three times and store the returned values in an array named "secondValues"
  const secondValues = [];
  for (let i = 0; i < 3; i++) {
    secondValues.push(secondCounter());
  }
  
  // Print the arrays
  console.log("firstValues array:", firstValues); // Output: firstValues array: [1, 2, 3, 4, 5]
  console.log("secondValues array:", secondValues); // Output: secondValues array: [1, 2, 3]
  