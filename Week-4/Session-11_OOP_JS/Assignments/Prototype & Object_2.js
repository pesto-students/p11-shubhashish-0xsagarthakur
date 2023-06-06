//JavaScript Prototype

// Creating a JavaScript object called Vehicle
function Vehicle(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
  
  // Adding a method called getDetails() to the Vehicle object using prototype
  Vehicle.prototype.getDetails = function() {
    return `Make: ${this.make}, Model: ${this.model}, Year: ${this.year}`;
  };
  
  // Creating a subclass called Car that extends Vehicle
  function Car(make, model, year, numDoors) {
    Vehicle.call(this, make, model, year);
    this.numDoors = numDoors;
  }
  
  // Inheriting methods from the Vehicle object
  Car.prototype = Object.create(Vehicle.prototype);
  
  // Adding a method called getDetails() to the Car object, overriding the method in Vehicle
  Car.prototype.getDetails = function() {
    const vehicleDetails = Vehicle.prototype.getDetails.call(this);
    return `${vehicleDetails}, Number of Doors: ${this.numDoors}`;
  };
  
  // Creating instances of Vehicle and Car
  const vehicle = new Vehicle('Toyota', 'Camry', 2022);
  const car = new Car('Honda', 'Civic', 2021, 4);
  
  // Calling the getDetails() method on each instance and logging the result to the console
  console.log(vehicle.getDetails());
  console.log(car.getDetails());
  