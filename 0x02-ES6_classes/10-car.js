/* eslint-disable no-underscore-dangle */

/** const _brand = Symbol('brand');
const _motor = Symbol('motor');
const _color = Symbol('color');

export default class Car {
  constructor(brand, motor, color) {
    this[_brand] = brand;
    this[_motor] = motor;
    this[_color] = color;
  }
  //get brand
  get brand() { return this[brand]; }

  //get motor
  get motor() { return this[motor]; }

  //get color
  get color() { return this[color]; }

  // method cloneCar()
  cloneCar() {
    const privated = new Car(this[_brand], this[_motor], this[_color]);
    return this.privated;
  }
}* */

export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  // method cloneCar()
  cloneCar() {
    return new this.constructor();
  }
}
