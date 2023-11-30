/* eslint-disable no-underscore-dangle */
import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    this._amount = amount;
    this._currency = currency;
  }

  // getter for amount
  get amount() {
    return this._amount;
  }

  // getter for currency
  get currency() {
    return this._currency;
  }

  // setter for amount
  set amount(amount) {
    if (Number.isNan(amount)) {
      throw new TypeError('Amount must be a number');
    }
    this._amount = amount;
  }

  // setter for currency
  set currency(currency) {
    if (currency.constructor !== Currency) {
      throw new TypeError('Currency must be a Currency class');
    }
    this.currency = currency;
  }

  // method displayFullPrice()
  displayFullPrice() {
    return `${this._amount} ${this._currency.name} ${this._currency.code}`;
  }

  // static method
  static convertPrice(amount, conversionRate) {
    if (Number.isNaN(amount) || Number.isNaN(conversionRate)) {
      throw new TypeError('Must be a number');
    }
    return amount * conversionRate;
  }
}
