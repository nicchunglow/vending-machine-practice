class currency {
  constructor() {
    this.moneyAccepted = [];
  }
}

class Coins extends currency {
  constructor() {
    super();
    this.amountList = [];
  }
  addAmount(moneyAmount) {
    try {
      if (moneyAmount % 5 && moneyAmount <= 100) {
        this.amountList.push(moneyAmount);
        return this.amountList;
      } else {
        return err;
      }
    } catch (err) {
      return "Coin value not accepted";
    }
  }
}

const coins = new Coins();

console.log(coins.addAmount(1000));
