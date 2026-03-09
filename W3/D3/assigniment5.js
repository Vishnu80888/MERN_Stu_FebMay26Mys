const wallet = {
  owner: "Vishnu",
  balance: 1200,
  lastTransaction: null,

  //  Deposit
  deposit: function(amount) {
    if (typeof amount !== "number" || amount <= 0) {
      console.error("Invalid deposit amount.");
      return;
    }

    this.balance += amount;
    
    // Update transaction
    this.lastTransaction = {
      type: "DEPOSIT",
      amount: amount,
      balanceAfter: this.balance
    };
  },

  // Method 2: Withdraw
  withdraw: function(amount) {
    if (typeof amount !== "number" || amount <= 0) {
      console.error("Invalid withdrawal amount.");
      return;
    }

    if (amount > this.balance) {
      console.error("Insufficient funds!");
      return;
    }

    this.balance -= amount;

    // Update transaction history
    this.lastTransaction = {
      type: "WITHDRAW",
      amount: amount,
      balanceAfter: this.balance
    };
  }
};

//  input Section
wallet.deposit(200);
wallet.withdraw(50);

console.log(wallet);