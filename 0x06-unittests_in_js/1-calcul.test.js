const assert = require("assert");
const calculateNumber = require("./1-calcul");

describe('calculateNumber', () => {
  describe('calculateNumber SUM', () => {
    it('sum two numbers', () => {
      assert.equal(calculateNumber('SUM', 1.4, 4.5), 6);
    });
  });
  describe('calculateNumber SUBTRACT', () => {
    it('subtract two numbers', () => {
      assert.equal(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
    });
  });
  describe('calculateNumber DIVIDE', () => {
    it('divide two numbers', () => {
      assert.equal(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
    });
  });
  describe('calculateNumber DIVIDE BY 0', () => {
    it('DIVIDES BY 0', () => {
      assert.equal(calculateNumber('DIVIDE', 1.4, 0), 'Error');
    });
  });

});
