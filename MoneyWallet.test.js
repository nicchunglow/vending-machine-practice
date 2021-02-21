const MoneyWallet = require("./MoneyWallet");

describe("MoneyWallet", () => {
  it("should be able to share the moneyList allowed", () => {
    const moneyWallet = new MoneyWallet();
    moneyWallet.loadCurrencyAllowed();
    const moneyList = [5, 10, 20, 50, 100, 200, 500, 1000];
    expect(moneyWallet.moneyList).toEqual(moneyList);
  });
  it("wallet to be able to detect money stored is money in the list or not", () => {
    const moneyWallet = new MoneyWallet();
    moneyWallet.loadCurrencyAllowed();
    const rightAmount = [1000];
    const message =
      "1000 has been entered the vending machine and 0 has been turned.";
    expect(moneyWallet.moneyChecker(rightAmount)).toEqual(message);
  });
  test("should take in money", () => {
    const moneyWallet = new MoneyWallet();
    moneyWallet.loadCurrencyAllowed();
    moneyWallet.moneyChecker([10, 20, 100, 1000]);
    expect(moneyWallet.currentBalance).toBe(1130);
  });
  test("should be able to take in coins only", () => {
    const moneyWallet = new MoneyWallet();
    moneyWallet.loadCurrencyAllowed();
    moneyWallet.moneyChecker([10, 20, 100]);
    expect(moneyWallet.currentBalance).toBe(130);
  });
  test("should be able to give a response", () => {
    const moneyWallet = new MoneyWallet();
    moneyWallet.loadCurrencyAllowed();
    const actionTaken = moneyWallet.moneyChecker([200, 500, 1000]);
    expect(moneyWallet.currentBalance).toBe(1700);
    expect(actionTaken).toEqual(
      "1700 has been entered the vending machine and 0 has been turned."
    );
  });
  test("should be able to catch error is it not an array", () => {
    const moneyWallet = new MoneyWallet();
    moneyWallet.loadCurrencyAllowed();
    expect(() => {
      moneyWallet.moneyChecker("string");
    }).toThrowError(
      new Error("Entry failed. Please insert money instead of random stuff")
    );
    expect(() => {
      moneyWallet.moneyChecker([123]);
    }).not.toThrowError(
      new Error("Entry failed. Please insert money instead of random stuff")
    );
  });
  test("should be able to catch error if it contains NaN", () => {
    const moneyWallet = new MoneyWallet();
    moneyWallet.loadCurrencyAllowed();
    expect(() => {
      moneyWallet.moneyChecker([10, 20, 100, "hahahaha"]);
    }).toThrowError(
      new Error("Entry failed. Please insert money instead of random stuff")
    );
  });
});
