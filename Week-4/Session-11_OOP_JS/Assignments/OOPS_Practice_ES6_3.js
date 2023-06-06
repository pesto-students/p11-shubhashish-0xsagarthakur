//Abstraction & Encapsulation

// Create a class called BankAccount
class BankAccount {
    constructor(accountNumber, balance, accountHolderName) {
      this.#accountNumber = accountNumber;
      this.#balance = balance;
      this.#accountHolderName = accountHolderName;
    }
  
    deposit(amount) {
      this.#balance += amount;
    }
  
    withdraw(amount) {
      // Implemented in subclasses
    }
  
    getBalance() {
      return this.#balance;
    }
  }
  
  // Create a subclass called CheckingAccount that extends BankAccount
  class CheckingAccount extends BankAccount {
    withdraw(amount) {
      this.#balance -= amount;
    }
  }
  
  // Create a subclass called SavingsAccount that extends BankAccount
  class SavingsAccount extends BankAccount {
    withdraw(amount) {
      if (this.#balance - amount < 0) {
        console.log('Withdrawal failed. Insufficient balance.');
        return;
      }
      this.#balance -= amount;
    }
  }
  
  // Create instances and call the methods
  const checkingAccount = new CheckingAccount('123456789', 1000, 'John Doe');
  checkingAccount.deposit(500);
  checkingAccount.withdraw(200);
  console.log(checkingAccount.getBalance()); // Output: 1300
  
  const savingsAccount = new SavingsAccount('987654321', 2000, 'Jane Smith');
  savingsAccount.deposit(1000);
  savingsAccount.withdraw(3000);
  console.log(savingsAccount.getBalance()); // Output: 3000 (no change due to withdrawal failure)
  