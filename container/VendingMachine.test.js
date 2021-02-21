/* eslint-disable no-undef */
const { expect } = require("@jest/globals");
const VendingMachine = require("./VendingMachine");

describe("Vending Machine", () => {
  it("make a drink when there are enough ingredients", () => {
    const LemonJuiceMachine = new VendingMachine("Lemon");
    LemonJuiceMachine.initVendingMachine();
    const fruitName = LemonJuiceMachine.IngredientMonitoringSystem.fruit.type;
    const juice = LemonJuiceMachine.makeJuice();
    expect(juice).toEqual(`${fruitName.toUpperCase()} JUICE`);
  });
  it("should be able to take in two different types of vending machine", () => {
    const LemonJuiceMachine = new VendingMachine("Lemon");
    const OrangeJuiceMachine = new VendingMachine("Orange");
    expect(LemonJuiceMachine.IngredientMonitoringSystem.fruit.type).toBe(
      "Lemon"
    );
    expect(OrangeJuiceMachine.IngredientMonitoringSystem.fruit.type).toBe(
      "Orange"
    );
  });
});
