/* eslint-disable no-undef */
const { expect } = require("@jest/globals");
const VendingMachine = require("./vending-machine");
describe("Vending Machine", () => {
  test("should take in money", () => {
    const OJMachine = new VendingMachine();
    OJMachine.initVendingMachine();
    OJMachine.insertMoney([10, 20, 100, 1000]);
    expect(OJMachine.moneyWallet.currentBalance).toBe(1130);
  });
  test("should be able to take in coins only", () => {
    const OJMachine = new VendingMachine();
    OJMachine.initVendingMachine();
    OJMachine.insertMoney([10, 20, 100]);
    expect(OJMachine.moneyWallet.currentBalance).toBe(130);
  });
  test("should be able to take in notes only", () => {
    const OJMachine = new VendingMachine();
    OJMachine.initVendingMachine();
    OJMachine.insertMoney([200, 500, 1000]);
    expect(OJMachine.moneyWallet.currentBalance).toBe(1700);
  });
  // test("should tell you the current balance entering the vending machine"),
  //   () => {
  //     const OJMachine = new VendingMachine();
  //     OJMachine.initVendingMachine();
  //     OJMachine.insertMoney([200, 500, 1000]);
  //     expect().toBe(`hi`);
  //   };
});
