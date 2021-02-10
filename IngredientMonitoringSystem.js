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

module.exports = IngredientMonitoringSystem;
