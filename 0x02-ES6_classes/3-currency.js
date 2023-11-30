/* eslint-disable no-underscore-dangle */
export default class Currency {
  constructor(code, name) {
    this._code = code;
    this._name = name;
  }

  // getter for code
  get code() {
    return this._code;
  }

  // setter for code
  set code(code) {
    if (typeof code !== 'string') {
      throw new TypeError('Code must be a string');
    }
    this._code = code;
  }

  // getter for name
  get name() {
    return this._name;
  }

  // setter for name
  set name(name) {
    if (typeof name !== 'string') {
      throw new TypeError('name must be a string');
    }
    this._name = name;
  }

  // method: displayFullCurrency()
  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
