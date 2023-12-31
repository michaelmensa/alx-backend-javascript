/* eslint-disable no-underscore-dangle */

export default class HolbertonClass {
  constructor(size, location) {
    this._size = size;
    this._location = location;
  }

  get size() { return this._size; }

  get location() { return this._location; }

  // [Symbol.toPrimitive]()]
  [Symbol.toPrimitive](hint) {
    if (hint === 'string') { return this._location; }
    if (hint === 'number') { return this._size; }
    return hint;
  }
}
