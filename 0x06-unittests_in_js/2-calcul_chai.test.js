const calculateNumber = require("./2-calcul_chai");

const chai = require('chai');
const expect = chai.expect;

describe('calculateNumber', () => {
  describe('calculateNumber SUM', () => {
    it('sum two numbers', () => {
      expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
    });
  });
  describe('calculateNumber SUBTRACT', () => {
    it('subtract two numbers', () => {
      expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
    });
  });
  describe('calculateNumber DIVIDE', () => {
    it('divide two numbers', () => {
      expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
    });
  });
  describe('calculateNumber DIVIDE BY 0', () => {
    it('DIVIDES BY 0', () => {
      expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
    });
  });

});
