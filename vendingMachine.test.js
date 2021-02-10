/* eslint-disable no-undef */
const { expect } = require("@jest/globals");
const VendingMachine = require("./vending-machine");

describe("Vending Machine", () => {
  test("should take in money", () => {
    const OJMachine = new VendingMachine();
    OJMachine.initVendingMachine();
    OJMachine.insertMoney([10, 20, 100, 1000]);
    expect(OJMachine.MoneyWallet.currentBalance).toBe(1130);
  });
  test("should be able to take in coins only", () => {
    const OJMachine = new VendingMachine();
    OJMachine.initVendingMachine();
    OJMachine.insertMoney([10, 20, 100]);
    expect(OJMachine.MoneyWallet.currentBalance).toBe(130);
  });
  test("should be able to give a response", () => {
    const OJMachine = new VendingMachine();
    OJMachine.initVendingMachine();
    const actionTaken = OJMachine.insertMoney([200, 500, 1000]);
    expect(OJMachine.MoneyWallet.currentBalance).toBe(1700);
    expect(actionTaken).toEqual(
      "1700 has been entered the vending machine and 0 has been turned."
    );
  });
  test("should be able to catch error is it not an array", () => {
    const OJMachine = new VendingMachine();
    OJMachine.initVendingMachine();
    expect(() => {
      OJMachine.insertMoney("string");
    }).toThrowError(
      new Error("Entry failed. Please insert money instead of random stuff")
    );
  });
  expect(() => {
    OJMachine.insertMoney([123]);
  }).not.toThrowError(
    new Error("Entry failed. Please insert money instead of random stuff")
  );
});

describe("IngredientMonitoringSystem", () => {
  describe("lemons", () => {
    it("should add lemons when ordered", () => {
      const OJMachine = new VendingMachine();
      OJMachine.IngredientMonitoringSystem.orderAndFillLemons(5);
      expect(OJMachine.IngredientMonitoringSystem.lemons).toEqual(5);
    });
    it("should only take in 10 lemons maximum", () => {
      const OJMachine = new VendingMachine();
      const numberOfLemons = 15;
      const remainingLemons = numberOfLemons - 10;
      const response = OJMachine.IngredientMonitoringSystem.orderAndFillLemons(
        numberOfLemons
      );
      expect(OJMachine.IngredientMonitoringSystem.lemons).toEqual(10);
      expect(response).toEqual(
        `You have filled too much lemons. Here are ${remainingLemons} not filled.`
      );
    });
    it("should throw error when it take in 0 lemons", () => {
      const OJMachine = new VendingMachine();
      expect(OJMachine.IngredientMonitoringSystem.lemons).toEqual(0);
      expect(() => {
        OJMachine.IngredientMonitoringSystem.orderAndFillLemons(0);
      }).toThrowError(new Error("I TELL U WHAT. PUT LEMONS RIGHT."));
    });
  });
  describe("water", () => {
    it("should add water when ordered", () => {
      const OJMachine = new VendingMachine();
      const amountOfWater = 50;
      const response = OJMachine.IngredientMonitoringSystem.orderAndFillWater(
        amountOfWater
      );
      expect(OJMachine.IngredientMonitoringSystem.water).toEqual(50);
      expect(response).toEqual(`You have filled ${amountOfWater}L.`);
    });
    it("should only take in 100L of water maximum", () => {
      const OJMachine = new VendingMachine();
      const amountOfWater = 150;
      const remainingWater = amountOfWater - 100;
      const response = OJMachine.IngredientMonitoringSystem.orderAndFillWater(
        amountOfWater
      );
      expect(OJMachine.IngredientMonitoringSystem.water).toEqual(100);
      expect(response).toEqual(
        `You have filled too much water. Here are ${remainingWater} not filled.`
      );
    });
    it("should throw error when it take in 0L of water", () => {
      const OJMachine = new VendingMachine();
      expect(() => {
        OJMachine.IngredientMonitoringSystem.orderAndFillWater(0);
      }).toThrowError(new Error("I TELL U WHAT. PUT WATER RIGHT."));
    });
  });
  describe("ice", () => {
    it("should add ice to supply when ordered", () => {
      const OJMachine = new VendingMachine();
      const amountOfIce = 20;
      const response = OJMachine.IngredientMonitoringSystem.orderAndFillIce(amountOfIce);
      expect(OJMachine.IngredientMonitoringSystem.ice).toEqual(amountOfIce);
      expect(response).toEqual(`You now have ${amountOfIce} ice cubes.`);
    });
    it("should only take in 50 ice cubes maximum", () => {
      const OJMachine = new VendingMachine();
      const amountOfIce = 55;
      const remainingIce = amountOfIce - 50;
      const response = OJMachine.IngredientMonitoringSystem.orderAndFillIce(amountOfIce);
      expect(OJMachine.IngredientMonitoringSystem.ice).toEqual(50);
      expect(response).toEqual(
        `You have filled too much ice. Here are ${remainingIce} not filled.`
      );
    });
    it("should throw error when it take in 0L of water", () => {
      const OJMachine = new VendingMachine();
      expect(() => {
        OJMachine.IngredientMonitoringSystem.orderAndFillIce(0);
      }).toThrowError(new Error("I TELL U WHAT. PUT ICE RIGHT."));
    });
  });
});
