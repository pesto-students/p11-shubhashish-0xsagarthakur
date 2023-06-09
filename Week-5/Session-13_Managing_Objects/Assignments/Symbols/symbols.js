function generateTransactionId() {
    let counter = 1;
  
    return function () {
      const transactionId = Symbol(`TRANSACTION_ID_${counter}`);
      counter++;
  
      return transactionId;
    };
  }
  
  // Usage example
  const getTransactionId = generateTransactionId();
  
  const transaction1 = getTransactionId();
  console.log(transaction1); // Symbol(TRANSACTION_ID_1)
  
  const transaction2 = getTransactionId();
  console.log(transaction2); // Symbol(TRANSACTION_ID_2)
  
  const transaction3 = getTransactionId();
  console.log(transaction3); // Symbol(TRANSACTION_ID_3)
  