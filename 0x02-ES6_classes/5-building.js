/* eslint-disable no-underscore-dangle */
export default class Building {
  constructor(sqft) {
    this._sqft = sqft;
    if (this.constructor !== Building
      && typeof this.evacuationWarningMessage !== 'function') {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }
  }

  // getter for sqft
  get sqft() {
    return this._sqft;
  }

  // setter for sqft
  set sqft(number) {
    if (Number.isNaN(number)) {
      throw new TypeError(`${number} must be a number`);
    }
    this._sqft = number;
  }
}
