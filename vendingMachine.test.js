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