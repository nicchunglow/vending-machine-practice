const IngredientMonitoringSystem = require("../components/IngredientMonitoringSystem");
const MoneyWallet = require("../components/MoneyWallet");
class VendingMachine {
  constructor(fruit) {
    this.MoneyWallet = new MoneyWallet();
    this.IngredientMonitoringSystem = new IngredientMonitoringSystem(fruit);
  }
  initVendingMachine() {
    this.MoneyWallet.loadCurrencyAllowed();
    this.IngredientMonitoringSystem.orderAndFillIce(10);
    this.IngredientMonitoringSystem.orderAndFillWater(100);
    this.IngredientMonitoringSystem.orderAndFillFruitChoice(50);
  }
  makeJuice() {
    this.IngredientMonitoringSystem.fruit.amount -= 2;
    this.IngredientMonitoringSystem.ice -= 10;
    this.IngredientMonitoringSystem.water -= 20;
    const capsFruit = this.IngredientMonitoringSystem.fruit.type.toUpperCase();

    return `${capsFruit} JUICE`;
  }
}
module.exports = VendingMachine;
