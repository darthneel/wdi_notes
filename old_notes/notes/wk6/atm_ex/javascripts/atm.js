var atm = {
  Account: function(name, balance) {
    var self = this;
    self.balance = balance;
    self.name = name;

    // Elements
    self.balanceDisplay = document.getElementById(self.name + "_balance");
    self.depositButton = document.getElementById(self.name + "_deposit");
    self.withdrawButton = document.getElementById(self.name + "_withdraw");
    self.amount = document.getElementById(self.name + "_amount");

    // Add Event Listeners
    self.depositButton.addEventListener('click', function(event) {
        self.deposit();
      });

    self.withdrawButton.addEventListener('click', function(event) {
      self.withdraw();
    });

    // Account Method Definitions
    self.deposit = function() {
      var amount = parseInt(self.amount.value);
      self.balance += amount;
      self.updateDisplay();
    }
    self.withdraw = function(){
      var amount = parseInt(self.amount.value);
      if (amount <= self.balance) {
        self.balance -= amount;
        self.updateDisplay();
      } else {
        alert("Insufficient Funds!");
      }      
    }
    self.updateDisplay = function() {
      if( self.balance <= 0 ) {
        self.balanceDisplay.classList.add("zero");
      } else {
        self.balanceDisplay.classList.remove("zero");
      }
      self.balanceDisplay.innerHTML = "$" + self.balance;
      //resets input
      self.amount.value = "";
    }
  }
}

window.onload = function() {
  atm.checkingAccount = new atm.Account('checking', 0);
  atm.savingsAccount = new atm.Account('savings', 0);
};