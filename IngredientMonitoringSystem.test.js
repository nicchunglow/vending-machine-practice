const IngredientMonitoringSystem = require("./IngredientMonitoringSystem");

describe("IngredientMonitoringSystem", () => {
  describe("lemons", () => {
    it("should add lemons when ordered", () => {
      const ingredientMonitoringSystem = new IngredientMonitoringSystem();
      ingredientMonitoringSystem.orderAndFillLemons(5);
      expect(ingredientMonitoringSystem.lemons).toEqual(5);
    });
    it("should only take in 10 lemons maximum", () => {
      const ingredientMonitoringSystem = new IngredientMonitoringSystem();
      const numberOfLemons = 15;
      const remainingLemons = numberOfLemons - 10;
      const response = ingredientMonitoringSystem.orderAndFillLemons(
        numberOfLemons
      );
      expect(ingredientMonitoringSystem.lemons).toEqual(10);
      expect(response).toEqual(
        `You have filled too much lemons. Here are ${remainingLemons} not filled.`
      );
    });
    it("should throw error when it take in 0 lemons", () => {
      const ingredientMonitoringSystem = new IngredientMonitoringSystem();
      expect(ingredientMonitoringSystem.lemons).toEqual(0);
      expect(() => {
        ingredientMonitoringSystem.orderAndFillLemons(0);
      }).toThrowError(new Error("I TELL U WHAT. PUT LEMONS RIGHT."));
    });
  });
  describe("water", () => {
    it("should add water when ordered", () => {
      const ingredientMonitoringSystem = new IngredientMonitoringSystem();
      const amountOfWater = 50;
      const response = ingredientMonitoringSystem.orderAndFillWater(
        amountOfWater
      );
      expect(ingredientMonitoringSystem.water).toEqual(50);
      expect(response).toEqual(`You have filled ${amountOfWater}L.`);
    });
    it("should only take in 100L of water maximum", () => {
      const ingredientMonitoringSystem = new IngredientMonitoringSystem();
      const amountOfWater = 150;
      const remainingWater = amountOfWater - 100;
      const response = ingredientMonitoringSystem.orderAndFillWater(
        amountOfWater
      );
      expect(ingredientMonitoringSystem.water).toEqual(100);
      expect(response).toEqual(
        `You have filled too much water. Here are ${remainingWater} not filled.`
      );
    });
    it("should throw error when it take in 0L of water", () => {
      const ingredientMonitoringSystem = new IngredientMonitoringSystem();
      expect(() => {
        ingredientMonitoringSystem.orderAndFillWater(0);
      }).toThrowError(new Error("I TELL U WHAT. PUT WATER RIGHT."));
    });
  });
  describe("ice", () => {
    it("should add ice to supply when ordered", () => {
      const ingredientMonitoringSystem = new IngredientMonitoringSystem();
      const amountOfIce = 20;
      const response = ingredientMonitoringSystem.orderAndFillIce(amountOfIce);
      expect(ingredientMonitoringSystem.ice).toEqual(amountOfIce);
      expect(response).toEqual(`You now have ${amountOfIce} ice cubes.`);
    });
    it("should only take in 50 ice cubes maximum", () => {
      const ingredientMonitoringSystem = new IngredientMonitoringSystem();
      const amountOfIce = 55;
      const remainingIce = amountOfIce - 50;
      const response = ingredientMonitoringSystem.orderAndFillIce(amountOfIce);
      expect(ingredientMonitoringSystem.ice).toEqual(50);
      expect(response).toEqual(
        `You have filled too much ice. Here are ${remainingIce} not filled.`
      );
    });
    it("should throw error when it take in 0L of water", () => {
      const ingredientMonitoringSystem = new IngredientMonitoringSystem();
      expect(() => {
        ingredientMonitoringSystem.orderAndFillIce(0);
      }).toThrowError(new Error("I TELL U WHAT. PUT ICE RIGHT."));
    });
  });
});
