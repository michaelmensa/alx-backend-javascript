/* eslint-disable no-underscore-dangle */
export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof length !== 'number') {
      throw new TypeError('Length must be a string');
    } else {
      this._name = name;
    }
    if (typeof length !== 'number') {
      throw new TypeError('Length must be a string');
    } else {
      this._length = length;
    }
    if (typeof length !== 'number') {
      throw new TypeError('Length must be a string');
    } else {
      this._students = students;
    }
  }

  // Getter for name
  get name() {
    return this._name;
  }

  // Setter for name
  set name(name) {
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = name;
  }

  // Getter for length
  get length() {
    return this._length;
  }

  // Setter for length
  set length(length) {
    if (typeof length !== 'number') {
      throw new TypeError('Length must be a string');
    }
    this._length = length;
  }

  // Getter for students
  get students() {
    return this._students;
  }

  // Setter for students
  set students(students) {
    if (Array.isArray(students) !== true) {
      throw new TypeError('Students must be an array');
    }
    this._students = students;
  }
}
