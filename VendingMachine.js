const IngredientMonitoringSystem = require("./IngredientMonitoringSystem");
const MoneyWallet = require("./MoneyWallet");
class VendingMachine {
  constructor() {
    this.MoneyWallet = new MoneyWallet();
    this.IngredientMonitoringSystem = new IngredientMonitoringSystem();
  }
  initVendingMachine() {
    this.MoneyWallet.loadCurrencyAllowed();
    this.IngredientMonitoringSystem.orderAndFillIce(10);
    this.IngredientMonitoringSystem.orderAndFillWater(100);
    this.IngredientMonitoringSystem.orderAndFillLemons(50);
  }
  insertMoney(money) {
    return this.MoneyWallet.moneyChecker(money);
  }
  makeJuice() {
    this.IngredientMonitoringSystem.lemons -= 2;
    this.IngredientMonitoringSystem.ice -= 10;
    this.IngredientMonitoringSystem.water -= 20;
    return "JUICE";
  }
}
module.exports = VendingMachine;

const OJMachine = new VendingMachine();
OJMachine.initVendingMachine();
// console.log(OJMachine.ingredientStorage.orderAndFillLemons(0));
// console.log(OJMachine.insertMoney([10]));
// console.log(OJMachine.insertMoney([10, 2, 2]));
// console.log(OJMachine.insertMoney([10, 14, 67]));
// console.log(OJMachine.insertMoney(['ads']));

// OJMachine.insertMoney([5, 10], [200]);

// console.log(OJMachine.currentBalance);
