const IngredientMonitoringSystem = require("./IngredientMonitoringSystem");
class MoneyWallet {
  constructor() {
    this.coinList = [];
    this.noteList = [];
    this.listOfMoney = [];
    this.currentBalance = 0;
  }
  loadCurrencyAllowed() {
    const coinList = [5, 10, 20, 50, 100];
    const noteList = [200, 500, 1000];
    this.listOfMoney = coinList.concat(noteList);
  }
}

class VendingMachine {
  constructor() {
    this.MoneyWallet = new MoneyWallet();
    this.IngredientMonitoringSystem = new IngredientMonitoringSystem();
  }
  initVendingMachine() {
    this.MoneyWallet.loadCurrencyAllowed();
  }
  insertMoney(money) {
    if (!(money instanceof Array)) {
      const err = "Entry failed. Please insert money instead of random stuff";
      throw new Error(err);
    }
    try {
      const listOfMoney = this.MoneyWallet.listOfMoney;
      const listOfUsableMoney = [];
      let unusableMoney = [];
      for (let i = 0; i < money.length; i++) {
        if (!listOfMoney.includes(money[i])) {
          unusableMoney.push(money[i]);
        } else {
          listOfUsableMoney.push(money[i]);
        }
      }
      const combinedUsableAmount = listOfUsableMoney.reduce(
        (AccuAmount, CurrentAmount) => AccuAmount + CurrentAmount
      );
      this.MoneyWallet.currentBalance += combinedUsableAmount;
      if (unusableMoney.length === 0) {
        unusableMoney = 0;
      } else if (unusableMoney.length > 1) {
        unusableMoney = unusableMoney[0];
      } else {
        unusableMoney.reduce(
          (AccuAmount, CurrentAmount) => AccuAmount + CurrentAmount
        );
      }
      return `${this.MoneyWallet.currentBalance} has been entered the vending machine and ${unusableMoney} has been turned.`;
    } catch (err) {
      return err;
    }
  }
}
module.exports = VendingMachine;

// const OJMachine = new VendingMachine();
// OJMachine.initVendingMachine();
// console.log(OJMachine.ingredientStorage.orderAndFillLemons(0));
// console.log(OJMachine.insertMoney([10]));
// console.log(OJMachine.insertMoney([10, 2, 2]));
// console.log(OJMachine.insertMoney([10, 14, 67]));
// console.log(OJMachine.insertMoney(['ads']));

// OJMachine.insertMoney([5, 10], [200]);

// console.log(OJMachine.currentBalance);
