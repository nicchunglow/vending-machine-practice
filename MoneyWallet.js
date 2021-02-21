class MoneyWallet {
  constructor() {
    this.moneyList = [];
    this.currentBalance = 0;
  }
  loadCurrencyAllowed() {
    const coinList = [5, 10, 20, 50, 100];
    const noteList = [200, 500, 1000];
    this.moneyList = coinList.concat(noteList);
  }
  addMoney(money) {
    try {
      const err = "Entry failed. Please insert money instead of random stuff";
      if (!(money instanceof Array)) {
        throw err;
      }
      const moneyList = this.moneyList;
      const listOfUsableMoney = [];
      let unusableMoney = [];
      for (let i = 0; i < money.length; i++) {
        if (isNaN(money[i])) {
          throw err;
        } else if (!moneyList.includes(money[i])) {
          unusableMoney.push(money[i]);
        } else {
          listOfUsableMoney.push(money[i]);
        }
      }
      const combinedUsableAmount = listOfUsableMoney.reduce(
        (AccuAmount, CurrentAmount) => AccuAmount + CurrentAmount
      );
      this.currentBalance += combinedUsableAmount;
      if (unusableMoney.length === 0) {
        unusableMoney = 0;
      } else if (unusableMoney.length > 1) {
        unusableMoney = unusableMoney[0];
      } else {
        unusableMoney.reduce(
          (AccuAmount, CurrentAmount) => AccuAmount + CurrentAmount
        );
      }
      return `${this.currentBalance} has been entered the vending machine and ${unusableMoney} has been turned.`;
    } catch (err) {
      throw new Error(err);
    }
  }
}

module.exports = MoneyWallet;
