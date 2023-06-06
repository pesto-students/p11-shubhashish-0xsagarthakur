//Inheritence

// Creating a class called Vehicle
class Vehicle {
    constructor(make, model, year, color) {
      this.make = make;
      this.model = model;
      this.year = year;
      this.color = color;
    }
  
    drive() {
      console.log(`Driving ${this.make} ${this.model}.`);
    }
  }
  
  // Creating a subclass called Car that extends Vehicle
  class Car extends Vehicle {
    constructor(make, model, year, color, numSeats) {
      super(make, model, year, color);
      this.numSeats = numSeats;
    }
  }
  
  // Creating a subclass called RideShareCar that extends Car
  class RideShareCar extends Car {
    constructor(make, model, year, color, numSeats, isAvailable) {
      super(make, model, year, color, numSeats);
      this.isAvailable = isAvailable;
    }
  }
  
  // Creating instances of Vehicle, Car, and RideShareCar
  const vehicle = new Vehicle('Toyota', 'Camry', 2022, 'Blue');
  const car = new Car('Honda', 'Civic', 2021, 'Red', 5);
  const rideShareCar = new RideShareCar('Chevrolet', 'Malibu', 2020, 'Black', 4, true);
  
  // Calling the drive() method on each instance
  vehicle.drive();
  car.drive();
  rideShareCar.drive();
  