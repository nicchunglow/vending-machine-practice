class IngredientMonitoringSystem {
  constructor(fruitChoice) {
    this.fruits = { type: fruitChoice, amount: 0 };
    this.water = 0;
    this.ice = 0;
  }

  orderAndFillFruitChoice(amount) {
    if (amount === 0) {
      const capsFruit = this.fruits.type.toUpperCase() + "S";
      const err = `I TELL U WHAT. PUT ${capsFruit} RIGHT.`;
      throw new Error(err);
    }
    try {
      this.fruits.amount += amount;
      let remainingFruits = 0;
      if (this.fruits.amount > 10) {
        remainingFruits = this.fruits.amount - 10;
        this.fruits.amount = 10;
        const lowerCaseFruit = this.fruits.type.toLowerCase() + "s";
        return `You have filled too much ${lowerCaseFruit}. Here are ${remainingFruits} not filled.`;
      } else {
        return `You have filled ${this.fruits.amount}.`;
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

module.exports = IngredientMonitoringSystem;
