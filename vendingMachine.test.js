/* eslint-disable no-undef */
const { expect } = require("@jest/globals");
const VendingMachine = require("./VendingMachine");

describe("Vending Machine", () => {
  it("make a drink when there are enough ingredients", () => {
    const OJMachine = new VendingMachine();
    OJMachine.initVendingMachine();
    const juice = OJMachine.makeJuice();
    expect(juice).toEqual("JUICE");
  });
});
