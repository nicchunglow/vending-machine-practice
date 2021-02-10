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

class IngredientMonitoringSystem {
  constructor() {
    this.lemons = 0;
    this.water = 0;
    this.ice = 0;
  }

  orderAndFillLemons(amount) {
    if (amount === 0) {
      const err = "I TELL U WHAT. PUT LEMONS RIGHT.";
      throw new Error(err);
    }
    try {
      this.lemons += amount;
      let remainingLemons = 0;
      if (this.lemons > 10) {
        remainingLemons = this.lemons - 10;
        this.lemons = 10;
        return `You have filled too much lemons. Here are ${remainingLemons} not filled.`;
      } else {
        return `You have filled ${this.lemons}.`;
      }
    } catch (err) {
      return err;
    }
  }
  orderAndFillWater(amount) {
    if (amount === 0) {
      const err = "I TELL U WHAT. PUT WATER RIGHT.";
      throw new Error(err);
    }
    try {
      this.water += amount;
      let remainingWater = 0;
      if (this.water > 100) {
        remainingWater = this.water - 100;
        this.water = 100;
        return `You have filled too much water. Here are ${remainingWater} not filled.`;
      } else {
        return `You have filled ${this.water}L.`;
      }
    } catch (err) {
      return err;
    }
  }
  orderAndFillIce(amount) {
    if (amount === 0) {
      const err = "I TELL U WHAT. PUT ICE RIGHT.";
      throw new Error(err);
    }
    try {
      this.ice += amount;
      let remainingIce = 0;
      if (this.ice > 50) {
        remainingIce = this.ice - 50;
        this.ice = 50;
        return `You have filled too much ice. Here are ${remainingIce} not filled.`;
      } else {
        return `You now have ${this.ice} ice cubes.`;
      }
    } catch (err) {
      return err;
    }
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
