/* eslint-disable no-underscore-dangle */
import Building from './5-building';

export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    super(sqft);
    this._floors = floors;
  }

  // getter for floors
  get floors() {
    return this._floors;
  }

  // setter for floors
  set floors(floors) {
    if (Number.isNaN(floors)) {
      throw new Error('floors must be a number');
    }
    this._floors = floors;
  }

  // override the evacuationWarningMessage()
  evacuationWarningMessage() {
    // if (this.constructor === Building && typeof this.evacuationWarningMessage === 'function') {}
    return `Evacuate slowly the ${this._floors}.`;
  }
}
