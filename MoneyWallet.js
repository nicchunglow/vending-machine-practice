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
  moneyChecker(money){
    if (!(money instanceof Array)) {
      const err = "Entry failed. Please insert money instead of random stuff";
      throw new Error(err);
    }
  }
}

module.exports = MoneyWallet;
