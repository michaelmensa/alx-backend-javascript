/* eslint-disable no-underscore-dangle */

export default class Airport {
  constructor(name, code) {
    this._name = name;
    this._code = code;
  }

  // getter for name
  get name() { return this._name; }

  // getter for code
  get code() { return this._code; }

  // setter for name
  set name(name) {
    if (typeof name !== 'string') {
      throw new Error('Name must be a string.');
    }
    this._name = name;
  }

  // setter for code
  set code(code) {
    if (typeof code !== 'string') {
      throw new Error('Code must be a string');
    }
    this._code = code;
  }

  // getter [Symbol.toStringTag] method toString()
  get [Symbol.toStringTag]() {
    return `${this._code}`;
  }
}
