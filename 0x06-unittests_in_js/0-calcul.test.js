const assert = require("assert");
const calculateNumber = require("./0-calcul");

describe('calculateNumber', () => {
  it('should sum two whole numbers',() => {
    assert.strictEqual(calculateNumber(1, 4), 5);
  });
  it('should round and sum two numbers',() => {
    assert.strictEqual(calculateNumber(1, 4.2), 5);
  });
  it('should round and sum two numbers',() => {
    assert.strictEqual(calculateNumber(1.7, 4.2), 6);
  });
  it('should round and sum one negative and one positive number',() => {
    assert.strictEqual(calculateNumber(1.7, -4), -2);
  });
  it('should sum 0 and return 0',() => {
    assert.strictEqual(calculateNumber(0, 0), 0);
  });
});
