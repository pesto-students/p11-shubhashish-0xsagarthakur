//Protecting the Object

// Creating a JavaScript object called person
const person = {
    _name: 'John', // underscore indicates a private property
    _age: null,
    _email: 'john@example.com',
    
    // Getter method for the age property
    getAge() {
      return this._age;
    },
    
    // Setter method for the age property
    setAge(age) {
      this._age = age;
    }
  };
  
  // Making the name property read-only
  Object.defineProperty(person, 'name', {
    get() {
      return this._name;
    }
  });
  
  // Making the email property read-only
  Object.defineProperty(person, 'email', {
    get() {
      return this._email;
    }
  });
  
  // Making the age property write-only
  Object.defineProperty(person, 'age', {
    set(age) {
      this._age = age;
    }
  });
  
  // Accessing and modifying the properties
  console.log(person.name); // Output: John
  console.log(person.email); // Output: john@example.com
  
  person.age = 30; // Setting the age property
  console.log(person.getAge()); // Output: 30
  